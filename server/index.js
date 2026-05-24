import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Directory to store Excel files
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
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
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Time', key: 'time', width: 12 },
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

// Handle contact form submission
app.post('/api/contact-submit', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
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
      name,
      email,
      phone,
      message,
    });

    // Save workbook
    await workbook.xlsx.writeFile(filepath);

    // Respond immediately after saving the Excel file
    res.json({ 
      success: true, 
      message: 'Contact submission saved successfully. Notification email will be sent shortly.',
      filename: getMonthFilename(),
    });

    // Send email asynchronously (background task)
    (async function sendNotificationEmail() {
      try {
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT || 587;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        let transporter;

        // Dev preview via Ethereal if requested
        if (process.env.DEV_EMAIL_PREVIEW === 'ethereal') {
          const testAccount = await nodemailer.createTestAccount();
          transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: { user: testAccount.user, pass: testAccount.pass },
          });
          console.log('Using Ethereal test account for email preview');
        } else if (smtpHost && smtpUser && smtpPass) {
          transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(smtpPort),
            secure: Number(smtpPort) === 465,
            auth: { user: smtpUser, pass: smtpPass },
            tls: { rejectUnauthorized: false },
          });
        } else {
          console.log('No SMTP configuration provided and dev preview not enabled; skipping email send.');
          return;
        }

        // prepare mail options
        const mailOptions = {
          from: `${process.env.SMTP_FROM || (process.env.SMTP_USER || 'no-reply@example.com')}`,
          to: process.env.NOTIFY_EMAIL || 'sriayurveda25@gmail.com',
          subject: `New contact form submission — ${name}`,
          text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nReceived at: ${date} ${time}`,
          html: `<h3>New contact form submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong><br/>${message}</p><p><small>Received at: ${date} ${time}</small></p>`,
        };

        // Verify transporter
        try {
          await transporter.verify();
          console.log('SMTP transporter verified');
        } catch (verifyErr) {
          console.error('SMTP verification failed:', verifyErr);
          // continue to attempt send; some providers may not allow verify
        }

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log('Background notification email sent:', info.messageId || info);
          // If Ethereal, log the preview URL
          if (process.env.DEV_EMAIL_PREVIEW === 'ethereal') {
            const previewUrl = nodemailer.getTestMessageUrl(info);
            console.log('Ethereal preview URL:', previewUrl);
          }
        } catch (sendErr) {
          console.error('Failed to send background notification email:', sendErr);
        }
      } catch (bgErr) {
        console.error('Unexpected error in background email task:', bgErr);
      }
    })();
    
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

const server = app.listen(PORT, () => {
  console.log(`🌿 Sri Ayurveda Website running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
