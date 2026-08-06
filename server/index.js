import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';
// import nodemailer from 'nodemailer'; // mail feature temporarily disabled
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;

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

// Handle contact form submission
app.post('/api/contact-submit', async (req, res) => {
  try {
    const { name, email, phone, appointmentDate, appointmentTime, consultationType, message } = req.body;
    
    if (!name || !email || !phone || !appointmentDate || !appointmentTime || !message) {
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
