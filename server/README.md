# Sri Ayurveda Contact Form Backend

This backend server handles contact form submissions and saves them to monthly Excel files.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server (run in a separate terminal):
```bash
npm start
```

The server will run on `http://localhost:5000`

> Email notifications: To enable email notifications on contact form submission, set the following environment variables in your `.env.local` or hosting dashboard:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-app-password
NOTIFY_EMAIL=sriayurveda25@gmail.com
SMTP_FROM="Sri Ayurveda" <your-email@example.com>
```

If SMTP variables are not provided, the server will still save submissions to Excel but will skip email notifications.

## How it works

- When a user submits the contact form, data is sent to the backend
- The backend automatically creates/updates an Excel file for the current month (format: `YYYY-MM.xlsx`)
- Each submission is added as a row with: Date, Time, Name, Email, Phone, Message
- Files are stored in the `/data` directory

## Excel File Structure

Example: `2026-02.xlsx` for February 2026

| Date       | Time     | Name      | Email           | Phone      | Message             |
|-----------|----------|-----------|-----------------|------------|---------------------|
| 2026-02-04 | 12:07:21 | John Doe  | john@email.com  | 9876543210 | Inquiry about... |

## API Endpoints

### POST /api/contact-submit
Accepts contact form data and saves to Excel

**Request Body:**
```json
{
  "name": "String",
  "email": "String",
  "phone": "String",
  "message": "String"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact submission saved successfully",
  "filename": "2026-02.xlsx"
}
```

### GET /api/health
Health check endpoint

## Dev email preview (Ethereal)

For safe local testing without a real SMTP account, enable Ethereal preview by creating a local `.env` with:

```
DEV_EMAIL_PREVIEW=ethereal
# Optional: override recipient/sender
NOTIFY_EMAIL=sriayurveda25@gmail.com
SMTP_FROM="Sri Ayurveda" <no-reply@example.com>
```

Start the server and submit the contact form. The server log will print an `Ethereal preview URL:` which you can open in your browser to view the rendered email.

## Files Location
Excel files are saved in: `code/data/YYYY-MM.xlsx`
