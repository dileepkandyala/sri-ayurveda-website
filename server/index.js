import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;
const otpStore = new Map();
const verifiedContactStore = new Map();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Directory to store Excel files
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function getOtpKey(type, contact) {
  return `${type}:${normalizeContact(type, contact)}`;
}

function normalizeContact(type, contact) {
  if (type === 'phone') {
    return normalizePhone(contact);
  }

  return contact.trim().toLowerCase();
}

function storeOtp(type, contact, otp) {
  const expiresAt = Date.now() + 5 * 60 * 1000;
  otpStore.set(getOtpKey(type, contact), { otp, expiresAt });
}

function getStoredOtp(type, contact) {
  const key = getOtpKey(type, contact);
  const otpEntry = otpStore.get(key);

  if (!otpEntry) {
    return null;
  }

  if (otpEntry.expiresAt < Date.now()) {
    otpStore.delete(key);
    return null;
  }

  return otpEntry;
}

function deleteStoredOtp(type, contact) {
  otpStore.delete(getOtpKey(type, contact));
}

function storeVerifiedContact(type, contact) {
  verifiedContactStore.set(getOtpKey(type, contact), Date.now() + 5 * 60 * 1000);
}

function isVerifiedContact(type, contact) {
  const expiresAt = verifiedContactStore.get(getOtpKey(type, contact));

  if (!expiresAt) {
    return false;
  }

  if (expiresAt < Date.now()) {
    verifiedContactStore.delete(getOtpKey(type, contact));
    return false;
  }

  return true;
}

function deleteVerifiedContact(type, contact) {
  verifiedContactStore.delete(getOtpKey(type, contact));
}

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits ? `+${digits}` : phone;
}

async function sendEmailOtp(email, otp) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || user;

  if (!host || !user || !pass) {
    throw new Error('Email delivery is not configured on this server.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to: email,
    subject: 'Sri Ayurveda verification code',
    text: `Your Sri Ayurveda verification code is ${otp}. It expires in 5 minutes.`,
    html: `<p>Your Sri Ayurveda verification code is <strong>${otp}</strong>.</p><p>It expires in 5 minutes.</p>`,
  });
}

async function sendSmsOtp(phone, otp) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    throw new Error('SMS delivery is not configured on this server.');
  }

  const client = twilio(accountSid, authToken);
  await client.messages.create({
    body: `Your Sri Ayurveda verification code is ${otp}. It expires in 5 minutes.`,
    from: fromNumber,
    to: normalizePhone(phone),
  });
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

app.post('/api/send-otp', async (req, res) => {
  let otp;

  try {
    const { type, contact } = req.body;

    if (!type || !contact) {
      return res.status(400).json({ error: 'OTP type and contact are required.' });
    }

    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(contact)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
      }
    } else if (type === 'phone') {
      const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
      if (!phoneRegex.test(contact)) {
        return res.status(400).json({ error: 'Please provide a valid phone number.' });
      }
    } else {
      return res.status(400).json({ error: 'OTP type must be email or phone.' });
    }

    otp = generateOtp();
    storeOtp(type, contact, otp);

    if (type === 'email') {
      await sendEmailOtp(contact, otp);
    } else {
      await sendSmsOtp(contact, otp);
    }

    res.json({ success: true, message: `OTP sent to your ${type === 'email' ? 'email' : 'phone'}.` });
  } catch (error) {
    console.error('Error sending OTP:', error);

    if (process.env.NODE_ENV !== 'production') {
      return res.status(200).json({ success: true, message: 'OTP generated locally for development testing.', otp });
    }

    res.status(500).json({ error: error.message || 'Unable to send OTP right now.' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  try {
    const { type, contact, otp } = req.body;

    if (!type || !contact || !otp) {
      return res.status(400).json({ error: 'OTP type, contact, and code are required.' });
    }

    const storedOtp = getStoredOtp(type, contact);
    if (!storedOtp) {
      return res.status(400).json({ error: 'No active OTP found for this contact.' });
    }

    if (storedOtp.otp !== otp) {
      return res.status(400).json({ error: 'The OTP you entered is incorrect.' });
    }

    deleteStoredOtp(type, contact);
    storeVerifiedContact(type, contact);
    res.json({ success: true, message: 'OTP verified successfully.' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Unable to verify OTP.' });
  }
});

// Handle contact form submission
app.post('/api/contact-submit', async (req, res) => {
  try {
    const { name, email, phone, appointmentDate, appointmentTime, consultationType, message } = req.body;
    
    if (!name || !email || !phone || !appointmentDate || !appointmentTime || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isVerifiedContact('email', email) || !isVerifiedContact('phone', phone)) {
      return res.status(403).json({ error: 'Please verify both your email and phone number before scheduling an appointment.' });
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
      message,
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
