# ✅ Pre-Deployment Checklist

Use this checklist before deploying to production.

## 🔧 Local Setup
- [ ] Node.js 16+ installed (`node --version`)
- [ ] All dependencies installed (`npm install` in root and server folders)
- [ ] `.env` file created with configuration
- [ ] `npm run build` completes without errors
- [ ] `npm start` works and server runs on configured PORT

## 📁 File Structure Verification
- [ ] `Procfile` exists in root directory
- [ ] `.env.example` exists with template variables
- [ ] `.gitignore` includes node_modules, .env, dist/, build/
- [ ] `dist/` folder exists with built assets
- [ ] `server/index.js` has production-ready code
- [ ] All image files exist in `src/images/`

## 🌐 Environment Variables
Check that these are set in your `.env` file:
```
PORT=5000
NODE_ENV=production
VITE_API_URL=https://your-domain.com/api
```
- [ ] PORT configured (default: 5000)
- [ ] NODE_ENV set to `production`
- [ ] VITE_API_URL points to your domain

## 🔗 GitHub Setup
- [ ] GitHub repository created
- [ ] Code pushed to GitHub (main branch)
- [ ] `.env` file is NOT in repository (check .gitignore)
- [ ] Repository is public or accessible to deployment platform

## 🚀 Hosting Platform Selection
Choose ONE platform:

### Railway.app ✅ RECOMMENDED
- [ ] Railway account created
- [ ] GitHub repository connected to Railway
- [ ] Environment variables added in Railway dashboard
- [ ] Deployment triggered and in-progress

### Render.com ✅ ALTERNATIVE
- [ ] Render account created
- [ ] GitHub repository connected
- [ ] Build command configured: `npm install && npm run build`
- [ ] Start command configured: `npm start`
- [ ] Environment variables set

### Heroku (Legacy)
- [ ] Heroku account created
- [ ] Heroku CLI installed
- [ ] Connected to GitHub or pushed via Git

## 🌍 Domain Setup
- [ ] Domain name purchased and registered
- [ ] Domain nameservers updated (point to your hosting provider)
- [ ] DNS propagation checked (nslookup your-domain.com)
- [ ] Custom domain configured in hosting dashboard
- [ ] HTTPS/SSL certificate auto-generated

## ✨ Frontend Quality
- [ ] All pages load without console errors
- [ ] Navigation links work correctly
- [ ] Images load properly
- [ ] Buttons and forms are responsive
- [ ] Mobile view looks good (test on phone or DevTools)
- [ ] No console errors or warnings (critical)

## 📧 Backend Functionality
- [ ] Contact form submits successfully
- [ ] API responses are correct (check network tab)
- [ ] Server logs show requests (no 5xx errors)
- [ ] CORS headers allow frontend domain
- [ ] Data saved correctly (Excel file or database)

## 🔒 Security Check
- [ ] `.env` file is in .gitignore
- [ ] No sensitive keys in code
- [ ] HTTPS enabled on custom domain
- [ ] Server logs secure (not exposing sensitive data)

## 📊 Performance
- [ ] Production build is optimized (check dist/ file sizes)
- [ ] Images are compressed
- [ ] Lighthouse score: 80+ (acceptable)
- [ ] Page loads in < 3 seconds

## 🎯 Pre-Launch Final Checks
- [ ] Site accessible via full domain: `https://your-domain.com`
- [ ] Favicon displays correctly
- [ ] Logo looks good on all pages
- [ ] All components render correctly
- [ ] No broken links in footer navigation
- [ ] Contact form email address is correct

## 📋 Post-Deployment
After site goes live:
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify analytics tracking (if configured)
- [ ] Monitor error logs for issues
- [ ] Set up uptime monitoring (Uptime Robot, etc.)

---

## 🚨 Common Issues & Fixes

### Build Fails
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5000 (Windows PowerShell)
Get-Process | Where-Object {$_.Port -eq 5000} | Stop-Process
```

### Domain Not Resolving
1. Check DNS records at your domain registrar
2. Wait 24-48 hours for propagation
3. Use `nslookup your-domain.com` to verify

### Contact Form Returns 404
Check that API endpoint matches:
- Frontend: `VITE_API_URL` in `.env`
- Server: `/api/contact-submit` route exists

---

## 📞 Quick Support
- Check `DEPLOYMENT.md` for detailed platform guides
- Review server logs in your hosting dashboard
- Use browser DevTools (F12) to check network requests
- Check email for deployment alerts/errors

---

**Once all items are checked, you're ready to launch! 🎉**
