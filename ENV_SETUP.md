# Environment Variables Guide

## Overview
This project uses environment variables to configure different settings for development and production environments. Never commit the `.env` file to version control.

## Local Development Setup

### 1. Create `.env` File
Create a new file named `.env` in the root directory (same level as `package.json`):

```bash
# Copy values from .env.example as template
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000/api
```

### 2. Available Variables

#### Core Configuration
- **PORT** (default: 5000)
  - Port number for Node.js server
  - In production: Railway/Render auto-assigns PORT, set in platform settings

- **NODE_ENV** (default: development)
  - Set to `development` for local development
  - Set to `production` for deployed site
  - Controls error logging verbosity and asset optimization

#### Frontend Configuration
- **VITE_API_URL** 
  - Local: `http://localhost:5000/api`
  - Production: `https://your-domain.com/api`
  - Used by React app for API calls (contact form, etc.)

#### Email Configuration (Optional)
If you want contact form to send emails:

- **SMTP_HOST** - Your email provider's SMTP server
  - Example: `smtp.gmail.com` (Gmail)
  - Example: `smtp.office365.com` (Outlook)

- **SMTP_PORT** - SMTP port number
  - Usually: `587` (TLS) or `465` (SSL)
  - Gmail: `587`

- **SMTP_USER** - Email account username
  - Example: `sriayurveda23@gmail.com`

- **SMTP_PASS** - Email account password
  - For Gmail: Use "App Password" (not regular password)
  - See instructions below

#### Database (Optional)
- **DATABASE_URL** - Connection string for database
  - Only needed if using PostgreSQL, MongoDB, etc.
  - Format: `postgresql://user:password@host/database`

- **SESSION_SECRET** - Random string for session encryption
  - Used for user sessions
  - Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

---

## Setup Instructions by Environment

### 🖥️ Local Development
```env
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000/api
```

Then run:
```bash
npm install
npm run dev        # Starts Vite dev server + Node.js server
```

### ☁️ Railway.app Production
1. Create `.env.production` in root (or use Railway dashboard)
2. In Railway dashboard → Project Settings → Environment:
   - Add: `NODE_ENV=production`
   - Add: `VITE_API_URL=https://your-domain.com/api`
   - Railway auto-sets `PORT`

3. Database/Email (optional):
   - `DATABASE_URL=postgresql://...`
   - Store sensitive values in Railway (encrypted)

### 🎨 Render.com Production
1. In Render dashboard → Environment:
   - `NODE_ENV=production`
   - `VITE_API_URL=https://your-domain.com/api`
   - Render auto-sets `PORT`

2. Other variables as needed

---

## Email Setup (Contact Form)

### Using Gmail
1. **Enable App Passwords:**
   - Go to myaccount.google.com
   - Security → 2-Step Verification (enable if not already)
   - Security → App passwords
   - Select "Mail" and "Windows Computer"
   - Google generates 16-character password

2. **Add to .env:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sriayurveda23@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # (16-char app password)
```

3. **Install nodemailer** (if not already):
```bash
npm install nodemailer
```

4. **Update server/index.js** with email logic (see DEPLOYMENT.md)

### Using Outlook/Office365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

---

## Important Security Notes

⚠️ **CRITICAL: Never commit .env file**
- It contains sensitive information
- Already in `.gitignore` - verify it's there
- Check: `git status` should NOT show `.env`

⚠️ **For Production Hosting:**
- Use platform's environment variable settings (Railway, Render dashboard)
- Don't push `.env` to GitHub
- Generate strong random values:
  ```bash
  node -e "console.log(Math.random().toString(36).substring(2, 15))"
  ```

✅ **Best Practice:**
- Commit `.env.example` with placeholder values
- Each developer creates their own `.env` locally
- Production values set in hosting platform dashboard

---

## Verifying Variables

### Check Local Variables
```bash
# Print NODE_ENV
node -e "console.log(process.env.NODE_ENV)"

# Check if PORT is set
node -e "console.log(process.env.PORT || 5000)"
```

### Check Server Logs
Start server and check logs:
```bash
npm start
# Look for: "Server running on port 5000" or similar
```

---

## Troubleshooting

### "Cannot find variable" Error
- [ ] Create `.env` file in root directory
- [ ] Restart dev server after creating `.env`
- [ ] Check variable name spelling (case-sensitive)
- [ ] Restart browser

### Contact Form Not Working
- [ ] Verify `VITE_API_URL` is correct in `.env`
- [ ] Check server logs for errors
- [ ] Ensure email variables are set (if using email)

### API Calls Return 404
- In `Browser DevTools (F12)` → Network:
  - Check request URL
  - Should be `http://localhost:5000/api/...` (development)
  - Should be `https://your-domain.com/api/...` (production)
- Update `VITE_API_URL` in `.env` if incorrect

### Production Site Returns Errors
- [ ] Verify `NODE_ENV=production` in hosting dashboard
- [ ] Check if `VITE_API_URL` uses `https://` (not http)
- [ ] Ensure custom domain is set correctly
- [ ] Check platform logs (Railway/Render) for server errors

---

## Reference Files

- `.env.example` - Template with all available variables
- `.gitignore` - Ensures .env isn't committed
- `DEPLOYMENT.md` - Full deployment guide
- `PRE_DEPLOYMENT_CHECKLIST.md` - Launch verification

---

For questions, refer to the main `DEPLOYMENT.md` guide or platform-specific documentation.
