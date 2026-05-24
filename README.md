# Sri Ayurveda Clinic & Panchakarma Center Website

Authentic Ayurvedic wellness center website with modern, responsive design and comprehensive business features.

**Live Site:** https://www.sriayurvedawellness.com

## 📚 Complete Documentation

👉 **[DOCUMENTATION.md](DOCUMENTATION.md)** - Complete guide with all information consolidated in one file:
- Quick Start & Setup
- Environment Configuration  
- Deployment Guide (Railway, Render, Heroku)
- Post-Deployment Testing
- Recent Improvements & Fixes
- Verification Checklist
- Troubleshooting Guide

## ✨ Key Features

- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern Stack** - React 18 + Vite + Tailwind CSS
- **Fast Performance** - Optimized bundle size, code splitting
- **SEO Optimized** - Open Graph, JSON-LD structured data, meta tags
- **Contact Forms** - Automated Excel data storage on backend
- **Interactive Components** - Gallery lightbox, Dosha Quiz, carousel
- **Production Ready** - Environment-based configuration, error handling

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
│   ├── lib/               # Utilities (api.js, supabase.js)
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

## 🔄 Recent Improvements (Feb 17, 2026)

### ✅ Fixed Critical Issues
1. **API Configuration** - Removed hardcoded localhost, now uses environment variables
2. **Favicon** - Fixed empty href in index.html
3. **SEO Enhancement** - Added Open Graph, Twitter cards, JSON-LD structured data
4. **Build Optimization** - Added code splitting and minification
5. **Dev Experience** - Added Vite proxy for seamless development

👉 **See [IMPROVEMENTS.md](IMPROVEMENTS.md) for complete details**

## 🌍 Environment Variables

Create `.env.local` for development:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Environment
NODE_ENV=development
PORT=5000

# Optional: Contact info, analytics, etc.
```

For production, update to your domain:
```env
VITE_API_URL=https://www.sriayurvedawellness.com/api
NODE_ENV=production
```

## 📝 API Endpoints

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

**Last Updated:** February 17, 2026  
**Status:** ✅ Production Ready