# Privacy, Security & Commerce Readiness

Before production launch, the deployment owner must verify:

- HTTPS is enforced with a valid SSL certificate and secure hosting configuration.
- CAPTCHA is enabled on appointment, newsletter, and purchase-related forms using the configured provider.
- Admin and data-storage access is restricted to authorized staff with strong credentials and least privilege.
- Contact workbooks and backups are encrypted, access-controlled, and backed up on a tested schedule.
- Patient information is never shown publicly. Patient photographs or testimonials require written consent before publication; the public testimonial section is disabled until consent records exist.
- Cookie consent is accepted before non-essential preferences or analytics are stored.
- Privacy Policy links remain visible on every page that collects personal data.

The site collects appointment, newsletter, and order consent in the UI. Provider credentials and deployment controls must be configured outside the frontend before accepting real users.

# Sri Ayurveda Clinic & Panchakarma Center - Complete Documentation

**Status:** ⚠️ **CODE-READY; DEPLOYMENT AND LEGAL REVIEW REQUIRED**  
**Last Updated:** May 24, 2026  
**Live Site:** https://www.sriayurvedawellness.com

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Setup & Development](#setup--development)
4. [Environment Configuration](#environment-configuration)
5. [API Endpoints](#api-endpoints)
6. [Deployment Guide](#deployment-guide)
7. [Post-Deployment Testing](#post-deployment-testing)
8. [Recent Improvements](#recent-improvements)
9. [Verification Checklist](#verification-checklist)
10. [Troubleshooting](#troubleshooting)
11. [Compliance Package](#compliance-package)

---

## Compliance Package

### Public policies implemented

The website exposes public pages for Privacy Policy, Terms & Conditions, Website Terms of Use, Medical Disclaimer, Telemedicine Policy, Cookie Policy, Data Retention & Security, Patient Rights & Responsibilities, Patient Confidentiality, Emergency & Clinical Limitations, AI Usage & Chatbot Disclaimer, Refund & Cancellation, Shipping & Delivery, Disclaimer, and Grievance Redressal.

Appointment forms require Privacy Policy acceptance and clinic communication consent. Online appointments additionally require teleconsultation terms consent. Newsletter signup requires privacy and communication consent. Product checkout requires Shipping & Return Policy acceptance. The cookie banner blocks analytics events until consent is accepted.

### Restricted internal documents still required

Create and keep access-controlled versions of the Patient Consent Forms (clinic, website, WhatsApp, Instagram, and legal forms), Advertising & Social Media Policy, Staff Confidentiality/NDA, Internal Patient Data Handling SOP, CGHS policies where applicable, incident-response procedure, backup/restore procedure, and written media-consent register. These should not be published as public web pages unless counsel approves them.

### Deployment gates

Do not describe the site as fully compliant until an Indian lawyer reviews the policy text and the clinic verifies its actual operations. Before launch, configure HTTPS/SSL, secure hosting, production CAPTCHA with server-side verification, restricted admin access, encrypted backups, retention schedules, access logging, and a tested breach-response process. Confirm Meta Ads, Google Business Profile, WhatsApp Business, and Instagram wording against their current platform rules before publishing campaigns.

---

## ⚡ Quick Start

### Development (Local)

```bash
# Install dependencies
npm install
cd server && npm install && cd ..

# Start frontend (terminal 1)
npm run dev

# Start backend (terminal 2)
cd server && npm start

# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 🎯 Project Overview

### ✨ Key Features

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern Stack** - React 18 + Vite + Tailwind CSS
- **Fast Performance** - Optimized bundle size, code splitting
- **SEO Optimized** - Open Graph, JSON-LD structured data, meta tags
- **Contact Forms** - Automated Excel data storage on backend
- **Interactive Components** - Gallery lightbox, Dosha Quiz, carousel
- **Production Ready** - Environment-based configuration, error handling

### 📦 Project Structure

```
├── src/                    # React frontend
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Services.jsx   # Services overview
│   │   ├── TreatmentsPage.jsx
│   │   ├── Gallery.jsx & GalleryPage.jsx
│   │   ├── Panchakarma.jsx
│   │   ├── DoshaQuiz.jsx  # Interactive quiz
│   │   └── [other components]
│   ├── lib/               # Utilities
│   │   ├── api.js         # API configuration
│   │   ├── supabase.js    # Database integration
│   │   ├── analytics.js   # Tracking
│   │   ├── seo.js         # SEO helpers
│   │   └── whatsapp.js    # WhatsApp integration
│   ├── images/            # Clinic photos, logo, favicon
│   ├── App.jsx            # Main app with routing
│   └── index.css          # Global styles (Tailwind)
├── server/                # Express backend
│   ├── index.js           # Contact form API
│   └── package.json
├── public/                # Static files
├── dist/                  # Production build (generated)
├── index.html             # HTML template with SEO
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── Procfile               # Deployment configuration
└── package.json
```

---

## 🖥️ Setup & Development

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git for version control

### Local Development Setup

1. **Navigate to project directory:**
```bash
cd "c:\Users\dilee\OneDrive\Desktop\Sri Ayurveda\code"
```

2. **Install root dependencies:**
```bash
npm install
```

3. **Install server dependencies:**
```bash
cd server && npm install && cd ..
```

4. **Create `.env.local` file:**
```env
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000/api
```

> Optional: Email notifications (recommended for contact form alerts)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-app-password
NOTIFY_EMAIL=sriayurveda25@gmail.com
SMTP_FROM="Sri Ayurveda" <your-email@example.com>
```

5. **Start development servers (open 2 terminals):**

Terminal 1 (Frontend):
```bash
npm run dev
# Frontend runs on http://localhost:3000
```

Terminal 2 (Backend):
```bash
cd server && npm start
# Backend runs on http://localhost:5000
```

6. **Open in browser:**
Visit `http://localhost:3000`

### Available Scripts

```bash
npm run dev     # Start Vite dev server
npm run build   # Build for production
npm start       # Start Node.js server
npm run preview # Preview production build locally
```

---

## ⚙️ Environment Configuration

### Environment Variables Overview

Environment variables allow different configurations for development and production without changing code.

### Local Development (.env.local)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# API Configuration
VITE_API_URL=http://localhost:5000/api

# Optional: Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sriayurveda23@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # 16-char app password for Gmail
```

### Production (.env.example template)

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# API Configuration (Update with your domain)
VITE_API_URL=https://www.sriayurvedawellness.com/api

# Optional: Analytics, Database, etc.
```

### Setting Up Email Configuration

If you want contact form to send emails:

#### Using Gmail
1. Go to myaccount.google.com
2. Security → 2-Step Verification → Enable if needed
3. Security → App passwords
4. Select "Mail" and "Windows Computer"
5. Copy generated 16-character password
6. Add to .env:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sriayurveda23@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

#### Using Outlook/Office365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Important Security Notes

⚠️ **NEVER commit .env file to GitHub**
- Already in `.gitignore` 
- Verify with: `git status` (should NOT show `.env`)

✅ **Best Practice:**
- Create `.env.local` locally (each developer)
- Commit `.env.example` with placeholders
- Set production variables in hosting dashboard

---

## 📡 API Endpoints

### POST `/api/contact-submit`
Submit contact form and save to Excel

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "Inquiry about treatments"
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

**Storage:**
Data automatically saved to `/data/YYYY-MM.xlsx` (monthly files)

### GET `/api/health`
Check if server is running

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-02-17T10:00:00Z"
}
```

---

## 🚀 Deployment Guide

### Step 1: Prepare GitHub Repository

#### Initialize Git
```bash
cd "c:\Users\dilee\OneDrive\Desktop\Sri Ayurveda\code"

git init
git config user.name "Your Name"
git config user.email "your-email@gmail.com"
git add .
git commit -m "Initial commit: Production ready deployment"
```

#### Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `sri-ayurveda-website`
4. Check "Public" (required for free tier)
5. Click "Create repository"

#### Push Your Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/sri-ayurveda-website.git
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your GitHub username

### Step 2: Choose Hosting Platform

#### 🎯 Recommended: Railway.app

**Benefits:**
- Auto-deploys on every git push
- Easy environment variable management
- Free tier available
- Excellent for full-stack apps

**Setup:**
1. Go to https://railway.app
2. Click "Start Now"
3. Sign in with GitHub
4. Click "Create New Project"
5. Select "Deploy from GitHub repo"
6. Connect your repository
7. Railway auto-builds and deploys

**After deployment:**
- Get Railway URL: `https://sri-ayurveda.railway.app`
- Configure environment variables in Railway dashboard
- Add custom domain (see Step 3)

#### 🔄 Alternative: Render.com

**Setup:**
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Set build command: `npm install && npm run build`
5. Set start command: `npm start`
6. Add environment variables
7. Deploy

#### 🚮 Alternative: Heroku (Legacy)

```bash
npm install -g heroku
heroku login
heroku create your-app-name
heroku config:set NODE_ENV=production
heroku config:set VITE_API_URL=https://your-domain.com/api
git push heroku main
```

### Step 3: Configure Custom Domain

#### Railway/Render Dashboard
1. Go to project settings
2. Find "Domains" section
3. Add custom domain
4. Get nameserver information (provided by platform)

#### GoDaddy Domain Setup

1. **Log in to GoDaddy:** https://godaddy.com
2. **Click "Manage My Domains"**
3. **Find your domain → Click on it**
4. **Go to DNS settings**
5. **Find "Nameservers" section → Click "Change"**
6. **Select "I'll use custom nameservers"**
7. **Enter your hosting platform's 4 nameservers:**
   ```
   ns-1224.awsdns-32.org
   ns-1224.awsdns-32.com
   ns-1224.awsdns-33.net
   ns-1224.awsdns-33.co.uk
   ```
8. **Click "Save"**
9. **Wait 24-48 hours for DNS propagation**

#### Verify DNS
```bash
# Check if DNS is working
nslookup your-domain.com
# Should return the IP of your hosting provider
```

### Step 4: Set Environment Variables

**In your hosting dashboard (Railway/Render):**

```env
PORT=5000
NODE_ENV=production
VITE_API_URL=https://your-domain.com/api
```

Platform will auto-redeploy with new variables.

### Step 5: Enable HTTPS

✅ **Automatic:** Most platforms provide free SSL certificates

Check that:
- Site accessible at `https://your-domain.com`
- Padlock icon shows in browser
- No security warnings

---

## ✅ Post-Deployment Testing

### Manual Testing Checklist

- [ ] Visit homepage at your domain
- [ ] Check all navigation links work
- [ ] Test contact form submission
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Verify favicon displays
- [ ] No console errors (F12 → Console)
- [ ] Lighthouse score 80+ (pagespeed.web.dev)

### Contact Form Test

1. Go to Contact page
2. Fill in test information:
   - Name: "Test"
   - Email: your-email@gmail.com
   - Phone: "1234567890"
   - Message: "Testing form"
3. Submit
4. Should see: ✅ "Message sent successfully!"
5. Check `/data` folder for Excel file

### Browser Compatibility

Test on:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Performance Check

```bash
# Use Google Lighthouse
Visit: https://pagespeed.web.dev/
Paste your domain
Target score: 80+
```

### API Health Check

```bash
# Test API endpoint
curl https://your-domain.com/api/health

# Should return:
# {"status":"ok","timestamp":"2026-02-17T..."}
```

---

## 🎯 Recent Improvements (May 24, 2026)

### ✅ May 24, 2026 — Responsive layout & build verification

- Updated global container and page-level CSS to improve responsive behavior and make content fit the screen across breakpoints. Adjusted `.container`, page paddings, and component margins to ensure mobile/tablet/desktop layouts render correctly.
- Fixed several CSS parsing errors and removed stray rules that previously caused PostCSS build failures.
- Enhanced form, hero, testimonial, gallery and carousel component styles for small screens (reduced padding, adjusted radii and margins).
- Rebuilt production bundle and verified a successful `npm run build` with no errors (dist assets generated and validated).


### ✅ Fixed Critical Issues

#### 1. API Configuration (Critical Fix)
**Problem:** Contact form used hardcoded `http://localhost:5000` - broken in production

**Solution:**
- Created `src/lib/api.js` - Centralized API configuration
- Updated `src/pages/Contact.jsx` - Uses new API utility
- Now uses environment variable `VITE_API_URL`

**Benefits:**
- Works in development AND production
- Single source of truth for API configuration
- Consistent error handling
- Easy to switch URLs without code changes

#### 2. Fixed Missing Favicon
**Problem:** `index.html` had empty favicon href

**Solution:** Updated to `/src/images/favicon.JPG`

**Result:**
- Sri Ayurveda logo now appears in browser tabs
- Professional appearance
- No console warnings

#### 3. Enhanced SEO & Social Sharing
**Added to index.html:**
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Card tags (X/Twitter sharing)
- ✅ Canonical URL (duplicate content prevention)
- ✅ Mobile optimization tags

**Result:**
Beautiful previews when shared on social media

#### 4. Added Structured Data (JSON-LD)
**Added to src/main.jsx:**
- Business type: LocalBusiness
- Full address and postal code
- Phone number
- Social media links

**Result:**
- Better Google Search visibility
- Rich snippets showing hours/location
- Better voice search performance

#### 5. Build Performance Optimizations
**Enhanced vite.config.js:**
- ✅ Dev server proxy for seamless development
- ✅ Code splitting (React vendors, icons separate)
- ✅ Production minification (Terser)
- ✅ Disabled sourcemaps for smaller files

**Result:**
- Faster development
- Smaller bundle sizes
- Faster page loads

#### 6. Improved Environment Configuration
**Updated:**
- `.env.local` - Clear development setup
- `.env.example` - Production template
- Complete documentation

---

## 📝 Verification Checklist

### Pre-Deployment

#### Local Setup
- [ ] Node.js 16+ installed
- [ ] All dependencies installed
- [ ] `.env.local` created with correct values
- [ ] `npm run build` completes without errors
- [ ] `npm start` works and server runs on PORT

#### File Structure
- [ ] `Procfile` exists in root
- [ ] `.env.example` exists
- [ ] `.gitignore` includes node_modules, .env, dist/
- [ ] `dist/` folder exists
- [ ] `server/index.js` has production code
- [ ] All images in `src/images/`

#### GitHub Setup
- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] `.env` file NOT in repository
- [ ] Repository is public

#### Hosting Platform
- [ ] Account created (Railway/Render/Heroku)
- [ ] Repository connected
- [ ] Environment variables added:
  - `NODE_ENV=production`
  - `VITE_API_URL=https://your-domain.com/api`
- [ ] Deployment successful (check logs)

#### Domain Configuration
- [ ] Domain nameservers updated
- [ ] DNS propagation complete (24-48 hours)
- [ ] HTTPS/SSL enabled
- [ ] Custom domain configured in hosting dashboard

### Post-Deployment

#### Frontend Quality
- [ ] All pages load without console errors
- [ ] Navigation works correctly
- [ ] Images load properly
- [ ] Mobile view responsive
- [ ] No console errors or warnings

#### Backend Functionality
- [ ] Contact form submits successfully
- [ ] API responses correct
- [ ] Server logs show requests
- [ ] No 5xx errors
- [ ] Data saved correctly

#### Security
- [ ] `.env` in .gitignore
- [ ] No sensitive keys in code
- [ ] HTTPS enabled
- [ ] Server logs secure

#### Performance
- [ ] Production build optimized
- [ ] Images compressed
- [ ] Lighthouse score: 80+
- [ ] Page loads in < 3 seconds

#### Final Verification
- [ ] Site accessible at `https://your-domain.com`
- [ ] Favicon displays
- [ ] All pages render correctly
- [ ] No broken links
- [ ] Contact form email correct

---

## 🔧 Troubleshooting

### Development Issues

#### "Port already in use" Error
```bash
# Kill process on port 5000 (PowerShell)
Get-Process | Where-Object {$_.Port -eq 5000} | Stop-Process

# Or change PORT in .env
PORT=5001
```

#### API calls returning 404
1. Check `VITE_API_URL` in `.env.local`
2. Verify backend is running on port 5000
3. Check browser Network tab (F12):
   - Should show correct API URL
   - Should be `http://localhost:5000/api/...`

#### Module not found errors
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

#### Favicon not showing
1. Check file exists: `src/images/favicon.JPG`
2. Verify href in `index.html`: `/src/images/favicon.JPG`
3. Hard refresh browser: Ctrl+Shift+R

### Deployment Issues

#### Build fails in hosting platform
1. Check build logs (error message)
2. Verify environment variables set
3. Check `VITE_API_URL` syntax
4. Try rebuild/redeploy

#### Repository not found when pushing
1. Verify GitHub repository created
2. Replace `YOUR_USERNAME` with actual username
3. Check token permissions:
   ```bash
   git remote -v
   # Should show correct URL
   ```

#### Domain not working after 48 hours
1. Clear browser cache: Ctrl+Shift+Delete
2. Try incognito/private window
3. Check DNS propagation: https://www.whatsmydns.net
4. Verify nameservers match hosting provider

#### Contact form not saving data
1. Check hosting platform persistent storage
2. Verify `/data` folder created
3. Check browser console for errors
4. Verify `VITE_API_URL` matches your domain

#### Images not loading on live site
1. Check images in `/src/images/` (bundled)
2. Open DevTools Network tab (F12)
3. Should load from `/assets/...`
4. If 404s: run `npm run build` and redeploy

### Production Issues

#### "Cannot find variable" Error
1. Create `.env.local` in root directory
2. Restart dev server after creating `.env`
3. Check variable name spelling (case-sensitive)
4. Restart browser

#### Site returns blank page
1. Check server logs in hosting dashboard
2. Verify environment variables set
3. Check JavaScript console (F12)
4. Try refresh or clear cache

#### Very slow site
1. Check Lighthouse score
2. Verify images are optimized
3. Check Network tab for slow requests
4. Monitor server CPU/memory usage

---

## 📞 Contact Information

- **Phone:** +91-8113452402
- **WhatsApp:** +91-7619529616
- **Email:** sriayurveda23@gmail.com
- **Location:** Ramanagara, Karnataka, India
- **Website:** https://www.sriayurvedawellness.com
- **Instagram:** @sri_ayurveda_clinic

---

## 📊 Summary

| Item | Status |
|------|--------|
| **Frontend Build** | ✅ Optimized |
| **Backend Server** | ✅ Production Ready |
| **Environment Config** | ✅ Complete |
| **SEO & Meta Tags** | ✅ Implemented |
| **API Configuration** | ✅ Environment-based |
| **Security** | ✅ Secured |
| **Deployment Ready** | ✅ YES |

---

**Status:** ✅ **PRODUCTION READY FOR DEPLOYMENT**  
**Last Updated:** May 24, 2026
