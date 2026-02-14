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

## Files Location
Excel files are saved in: `code/data/YYYY-MM.xlsx`
