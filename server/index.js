import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;
const verifiedContactStore = new Map();
// Verified user_json_url values are hosted on phone.email's own domain.
// Restricting fetches to this host prevents the backend being used as an SSRF proxy.
const PHONE_EMAIL_HOST_SUFFIX = '.phone.email';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Directory to store Excel files
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function getContactKey(type, contact) {
  return `${type}:${normalizeContact(type, contact)}`;
}

function normalizeContact(type, contact) {
  if (type === 'phone') {
    return normalizePhone(contact);
  }

  return contact.trim().toLowerCase();
}

function storeVerifiedContact(type, contact) {
  verifiedContactStore.set(getContactKey(type, contact), Date.now() + 5 * 60 * 1000);
}

function isVerifiedContact(type, contact) {
  const expiresAt = verifiedContactStore.get(getContactKey(type, contact));

  if (!expiresAt) {
    return false;
  }

  if (expiresAt < Date.now()) {
    verifiedContactStore.delete(getContactKey(type, contact));
    return false;
  }

  return true;
}

function deleteVerifiedContact(type, contact) {
  verifiedContactStore.delete(getContactKey(type, contact));
}

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits ? `+${digits}` : phone;
}

// phone.email returns a one-time user_json_url after it verifies the OTP itself.
// We only trust URLs hosted on their domain before fetching them server-side.
function isAllowedPhoneEmailUrl(urlString) {
  try {
    const parsed = new URL(urlString);
    return (
      parsed.protocol === 'https:' &&
      (parsed.hostname === 'phone.email' || parsed.hostname.endsWith(PHONE_EMAIL_HOST_SUFFIX))
    );
  } catch {
    return false;
  }
}

// Get current month filename (YYYY-MM.xlsx)
function getMonthFilename() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}.xlsx`;
}

// Get or create Excel workbook for current month
async function getOrCreateWorkbook() {
  const filename = getMonthFilename();
  const filepath = path.join(dataDir, filename);
  
  let workbook;
  if (fs.existsSync(filepath)) {
    workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filepath);
  } else {
    workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contact Submissions');
    
    // Add headers
    worksheet.columns = [
      { header: 'Submission Date', key: 'date', width: 15 },
      { header: 'Submission Time', key: 'time', width: 12 },
      { header: 'Appointment Date', key: 'appointmentDate', width: 15 },
      { header: 'Appointment Time', key: 'appointmentTime', width: 15 },
      { header: 'Consultation Type', key: 'consultationType', width: 18 },
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'Message', key: 'message', width: 50 },
    ];
    
    // Style header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2F8B57' } };
  }
  
  return { workbook, filepath };
}

// Verifies an email/phone using a phone.email "user_json_url" produced by their
// Sign-in-with-Phone / Verify-Email widgets after they have already confirmed the OTP.
app.post('/api/verify-contact', async (req, res) => {
  try {
    const { type, user_json_url: userJsonUrl } = req.body;

    if (type !== 'email' && type !== 'phone') {
      return res.status(400).json({ error: 'Verification type must be email or phone.' });
    }

    if (!userJsonUrl || !isAllowedPhoneEmailUrl(userJsonUrl)) {
      return res.status(400).json({ error: 'Invalid verification link.' });
    }

    const phoneEmailResponse = await fetch(userJsonUrl);
    if (!phoneEmailResponse.ok) {
      throw new Error(`phone.email responded with status ${phoneEmailResponse.status}`);
    }

    const data = await phoneEmailResponse.json();
    const contact =
      type === 'email'
        ? data.user_email_id
        : normalizePhone(`${data.user_country_code || ''}${data.user_phone_number || ''}`);

    if (!contact) {
      return res.status(502).json({ error: 'Verification data did not include the expected contact info.' });
    }

    storeVerifiedContact(type, contact);
    res.json({ success: true, type, contact });
  } catch (error) {
    console.error('Error verifying contact via phone.email:', error);
    res.status(502).json({ error: 'Unable to verify contact right now.' });
  }
});

// Handle contact form submission
app.post('/api/contact-submit', async (req, res) => {
  try {
    const {
      name, email, phone, appointmentDate, appointmentTime, consultationType,
      message, requestType, orderDetails, deliveryAddress, deliveryLocation,
    } = req.body;
    const isShopOrder = requestType === 'shop';
    
    if (!name || !email || !phone || !message || (!isShopOrder && (!appointmentDate || !appointmentTime))) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (isShopOrder && (
      !deliveryAddress?.addressLine1 ||
      !deliveryAddress?.city ||
      !deliveryAddress?.postalCode ||
      !deliveryAddress?.state
    )) {
      return res.status(400).json({ error: 'A complete delivery address is required for shop requests.' });
    }

    if (deliveryLocation && (
      !Number.isFinite(deliveryLocation.latitude) ||
      !Number.isFinite(deliveryLocation.longitude) ||
      deliveryLocation.latitude < -90 ||
      deliveryLocation.latitude > 90 ||
      deliveryLocation.longitude < -180 ||
      deliveryLocation.longitude > 180
    )) {
      return res.status(400).json({ error: 'Invalid delivery location.' });
    }

    if (!isVerifiedContact('email', email) || !isVerifiedContact('phone', phone)) {
      return res.status(403).json({ error: 'Please verify both your email and phone number before continuing.' });
    }
    
    const { workbook, filepath } = await getOrCreateWorkbook();
    const worksheet = workbook.worksheets[0];
    
    // Add new row and save workbook (synchronous before responding)
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];

    worksheet.addRow({
      date,
      time,
      appointmentDate,
      appointmentTime,
      consultationType,
      name,
      email,
      phone,
      message: orderDetails ? `${message}\n\n${orderDetails}` : message,
    });

    // Save workbook
    await workbook.xlsx.writeFile(filepath);
    deleteVerifiedContact('email', email);
    deleteVerifiedContact('phone', phone);

    // Respond immediately after saving the Excel file
    res.json({ 
      success: true, 
      message: 'Contact submission saved successfully. Email notifications are disabled for now.',
      filename: getMonthFilename(),
    });

    // Mail feature temporarily disabled. Contact data is still saved to Excel.
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ error: 'Failed to save contact data' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// SPA fallback - serve index.html for all non-API routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🌿 Sri Ayurveda Website running on http://localhost:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.warn(`Port ${port} is busy. Trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }

    console.error('Server error:', error);
    process.exit(1);
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
};

startServer(DEFAULT_PORT);
