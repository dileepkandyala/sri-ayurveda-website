# Sri Ayurveda Website - Deployment Guide

## 🚀 Quick Deployment Instructions

This guide will help you deploy the Sri Ayurveda website to production.

---

## Prerequisites

- Node.js 16+ installed
- Git account (GitHub, GitLab, or Bitbucket)
- Domain name purchased
- Hosting platform account (Railway, Render, or Heroku)

---

## Step 1: Prepare Your Code for GitHub

### Initialize Git Repository (if not done)
```bash
cd "c:\Users\dilee\OneDrive\Desktop\Sri Ayurveda\code"
git init
git add .
git commit -m "Initial commit: Sri Ayurveda website ready for deployment"
```

### Create GitHub Repository
1. Go to github.com and create a new repository
2. Name it: `sri-ayurveda-website`
3. Don't initialize with README (we already have files)
4. Push local repo:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sri-ayurveda-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Set Up Environment Variables

### Create `.env` File in Root Directory
```bash
PORT=5000
NODE_ENV=production
VITE_API_URL=https://your-domain.com/api
```

⚠️ **Never commit `.env` file!** It's already in `.gitignore`

---

## Step 3: Choose Deployment Platform

### 🎯 Recommended: Railway.app

#### Deploy to Railway:

1. **Sign up at railway.app**

2. **Connect GitHub Repository:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository

3. **Configure Environment Variables:**
   - Go to Project Settings
   - Click "Environment"
   - Add variables from `.env.example`:
     - `PORT=5000`
     - `NODE_ENV=production`

4. **Railway Auto-Deploys:**
   - Every `git push` to main auto-deploys
   - Builds using `npm run build`
   - Runs using `npm start`

5. **Add Custom Domain:**
   - Get Railway domain URL
   - In Railway: Settings → Domains → Add Custom Domain
   - Follow DNS setup instructions
   - Wait 24-48 hours for DNS propagation

---

### 🔄 Alternative: Render.com

1. **Sign up at render.com**

2. **Create New Web Service:**
   - Connect GitHub
   - Select repository
   - Set build command: `npm install && npm run build`
   - Set start command: `npm start`
   - Add environment variables

3. **Deploy and add custom domain**

---

### 🚮 Alternative: Heroku (Legacy - No Free Tier)

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Add environment variables
heroku config:set NODE_ENV=production
heroku config:set PORT=5000

# Deploy
git push heroku main
```

---

## Step 4: Configure Your Domain

### For Railway/Render:

1. **Get Hosting Provider's DNS Settings** (from dashboard)

2. **Go to Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Login to your account
   - Find DNS Settings
   - Update nameservers OR A records pointing to hosting provider
   - Example:
     - Type: A Record
     - Name: @ (or www)
     - Value: [hosting provider's IP or domain]

3. **Wait for Propagation** (24-48 hours)

4. **Test Domain:**
   ```bash
   # Check DNS propagation
   nslookup your-domain.com
   ```

---

## Step 5: Post-Deployment Testing

### Test Your Live Site:

```bash
# Check if site is up
curl https://your-domain.com

# Check API health
curl https://your-domain.com/api/health
```

### Manual Tests:
- [ ] Visit homepage
- [ ] Check all navigation links
- [ ] Test contact form submission
- [ ] Verify images load
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### Performance Check:
- Use Google Lighthouse: https://pagespeed.web.dev/
- Target: 90+ score

---

## Step 6: Enable HTTPS (SSL Certificate)

### Railway/Render:
- **Automatic**: SSL provided by default
- Check your domain works with `https://`

### Custom Domain:
- Most platforms auto-renew SSL
- Check dashboard for certificate status

---

## Step 7: Monitoring & Maintenance

### Set Up Monitoring:
- **Railway/Render Dashboard**: Check logs and status
- **Email Alerts**: Enable for deployment failures
- **Uptime Monitoring**: Use Uptime Robot (free tier) to monitor site availability

### Regular Maintenance:
```bash
# Keep dependencies updated
npm audit
npm update

# Rebuild and deploy
npm run build
git add .
git commit -m "Update dependencies"
git push origin main
```

---

## 📋 Troubleshooting

### Site Not Loading:
1. Check deployment logs in platform dashboard
2. Verify environment variables are set
3. Check domain DNS propagation
4. Clear browser cache

### Contact Form Not Working:
1. Check server logs: `/api/contact-submit` endpoint
2. Verify CORS settings in `server/index.js`
3. Ensure database directory exists (or email integration)

### Build Fails:
1. Check `npm run build` locally first
2. Verify all dependencies installed
3. Check Node.js version (16+ required)
4. Review build logs in platform dashboard

### Domain Not Resolved:
```bash
# Check DNS records
nslookup your-domain.com

# Check nameserver
whois your-domain.com
```

---

## Step 8: Update Contact Form Backend

### Add Email Notification (Optional):

Update `server/index.js` to send emails on contact submission:

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// After saving to Excel, send email:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'sriayurveda23@gmail.com',
  subject: `New Contact: ${name}`,
  html: `<p>${message}</p><p>From: ${email} (${phone})</p>`
});
```

Install package:
```bash
npm install nodemailer
```

---

## 🎉 Success Checklist

- [ ] GitHub repository created and pushed
- [ ] Deployment platform selected and connected
- [ ] Environment variables configured
- [ ] Site deployed and accessible
- [ ] Custom domain configured
- [ ] HTTPS/SSL working
- [ ] Contact form functional
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Performance optimized

---

## 📞 Support Resources

- **Railway Docs**: https://docs.railway.app/
- **Render Docs**: https://render.com/docs
- **Vite Docs**: https://vitejs.dev/
- **Express Docs**: https://expressjs.com/

---

## 🔐 Security Notes

1. Never commit `.env` file
2. Use strong environment variable values
3. Keep dependencies updated
4. Monitor error logs for security issues
5. Set up CORS properly in production
6. Validate/sanitize form inputs on backend

---

**Your Sri Ayurveda website is now ready for production! 🌿✨**
