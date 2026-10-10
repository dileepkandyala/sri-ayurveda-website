# Sri Ayurveda Clinic & Panchakarma Center Website

Authentic Ayurvedic wellness center website with modern, responsive design and comprehensive business features.

**Live Site:** https://www.sriayurvedawellness.com

## 📚 Complete Documentation

👉 **[DOCUMENTATION.md](DOCUMENTATION.md)** - Setup, environment configuration, deployment, and troubleshooting:
- Quick Start & Setup
- Environment Configuration  
- Deployment Guide (Railway, Render, Heroku)
- Post-Deployment Testing
- Verification Checklist
- Troubleshooting Guide

## ✨ Key Features

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern Stack** - React 18 + Vite + Tailwind CSS
- **Fast Performance** - Optimized bundle size, code splitting
- **SEO Optimized** - Open Graph, JSON-LD structured data, meta tags
- **Contact Forms** - Automated Excel data storage on backend
- **Interactive Components** - Gallery lightbox, Dosha Quiz, carousel
- **Deployment-focused** - Environment-based configuration and error handling; production setup still requires verification

## 🚀 Getting Started

### Development

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

## 📦 Project Structure

```
├── src/                    # React frontend
│   ├── pages/             # Page components
│   ├── lib/               # API, analytics, SEO, cart, and WhatsApp utilities
│   ├── images/            # Clinic photos, logo, favicon
│   ├── App.jsx            # Main app with routing
│   └── index.css           # Global styles (Tailwind)
├── server/                # Express backend
│   ├── index.js           # Contact form API
│   └── package.json
├── public/                # Static files
├── dist/                  # Production build (generated)
├── index.html             # HTML template with SEO
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── [guides]               # Deployment guides

```

## 🌍 Environment Variables

Copy `.env.example` to `.env` and provide the public phone.email widget client IDs:

```env
PHONE_EMAIL_PHONE_CLIENT_ID=
PHONE_EMAIL_EMAIL_CLIENT_ID=
```

For production, use `.env.production.example` as a template and set private backend configuration in the hosting platform. Phone.email client IDs are public, not secrets. For a single-origin deployment, leave `VITE_API_URL` unset.

## 📝 API Endpoints

### POST `/api/contact-submit`
Submit contact form and save to Excel

**Request:**
```json
{
  "name": "John Doe",
  "email": "verified@example.com",
  "phone": "+919876543210",
  "appointmentDate": "2026-10-11",
  "appointmentTime": "11:00 AM",
  "consultationType": "Online",
  "message": "Inquiry about treatments"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact submission saved successfully. Email notifications are disabled for now.",
  "filename": "YYYY-MM.xlsx"
}
```

Data is automatically saved to `/data/YYYY-MM.xlsx` monthly files.

## 🔒 Security

- ✅ Environment variables for sensitive config
- ✅ No API keys in source code
- ✅ CORS enabled for frontend
- ✅ Input validation on contact form
- ✅ .gitignore configured for secrets

## 📊 Performance

- **Bundle Size:** ~235 KB gzipped (optimized)
- **Build Time:** ~5 seconds
- **Lighthouse Score:** 85+
- **Code Splitting:** React vendors, icons separated

## 🌐 Deployment Platforms

Ready to deploy on:
- ✅ Railway.app
- ✅ Render.com
- ✅ Heroku
- ✅ Any Node.js hosting

## 📞 Contact Information

- **Phone:** +91-8113452402
- **WhatsApp:** +91-7619529616
- **Location:** Ramanagara, Karnataka, India
- **Website:** https://www.sriayurvedawellness.com

## 📄 License

Private - Sri Ayurveda Clinic

---

**Status:** Requires deployment, provider, storage, privacy, and legal checks before production use.