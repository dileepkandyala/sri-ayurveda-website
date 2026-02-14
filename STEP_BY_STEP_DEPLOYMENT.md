# 🚀 Complete Step-by-Step Deployment Guide

**Your Domain**: GoDaddy  
**Your Code Status**: ✅ Production Ready  
**Recommended Hosting**: Railway.app (Best for Full-Stack)

---

## 📋 Complete Deployment Process (15-30 minutes)

### Phase 1: GitHub Repository Setup (5 minutes)

#### Step 1.1: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Create account with email and password
4. Verify email

#### Step 1.2: Create New Repository
1. Log in to GitHub
2. Click "+" icon (top right) → "New repository"
3. Fill in:
   - **Repository name**: `sri-ayurveda-website`
   - **Description**: Sri Ayurveda Clinic Website
   - **Public**: Yes (required for Railway free tier)
   - **Initialize with**: Leave unchecked (we'll push existing code)
4. Click "Create repository"

#### Step 1.3: Push Your Code to GitHub
Open PowerShell and run these commands:

```powershell
cd "c:\Users\dilee\OneDrive\Desktop\Sri Ayurveda\code"

# Initialize and configure git
git init
git config user.name "Your Name"
git config user.email "your-email@gmail.com"

# Add all files
git add .

# Commit
git commit -m "Initial commit: Production ready deployment"

# Add remote repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sri-ayurveda-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `YOUR_GITHUB_USERNAME` with your actual GitHub username.

✅ **Expected Result**: You should see files uploading to GitHub

---

### Phase 2: Host Setup on Railway.app (5 minutes)

#### Step 2.1: Create Railway Account
1. Go to https://railway.app
2. Click "Start Now"
3. Sign up with GitHub account
4. Click "Connect with GitHub"
5. Authorize Railway to access GitHub

#### Step 2.2: Create New Project
1. In Railway dashboard, click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Click "Configure GitHub App"
4. Select your account
5. Choose repositories: Select `sri-ayurveda-website`
6. Click "Install & Authorize"

#### Step 2.3: Deploy Project
1. Back in Railway, click "Deploy from GitHub repo" again
2. Select `sri-ayurveda-website` repository
3. Click "Deploy Now"
4. Wait 2-3 minutes for build to complete
5. You should see:
   - ✅ Build successful
   - ✅ Deployment successful
   - 🌐 Railway domain generated (something like `sri-ayurveda.railway.app`)

✅ **Test it works**: Click the Railway domain URL - your site should load!

---

### Phase 3: Configure Environment Variables (2 minutes)

#### Step 3.1: Add Variables to Railway
1. In Railway dashboard, find your project
2. Click "Variables" tab
3. Click "Add Variable"
4. Add these variables:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `VITE_API_URL` | `https://your-domain.com/api` |

(Replace `your-domain.com` with your actual domain)

4. Click "Save"
5. Wait for auto-redeploy (should take ~1 minute)

---

### Phase 4: Configure GoDaddy Domain (10 minutes)

#### Step 4.1: Get Railway's DNS Information
1. Go back to Railway dashboard
2. Click on your project
3. Go to "Settings" → "Domains"
4. You should see Railway's nameserver information:
   - `ns-1224.awsdns-32.org`
   - `ns-1224.awsdns-32.com`
   - etc. (Railway will show 4 nameservers)

**Copy these 4 nameservers**

#### Step 4.2: Add Custom Domain in Railway
1. Still in Railway Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `your-domain.com`
4. Click "Add"
5. Railway will show: "Waiting for DNS configuration"

(Keep this page open, we'll come back to verify)

#### Step 4.3: Update GoDaddy Nameservers

1. Log in to GoDaddy: https://godaddy.com
2. Click "Manage My Domains"
3. Find your domain, click on it
4. Go to "DNS" settings
5. Look for "Nameservers" section
6. Click "Change Nameservers"
7. Select "I'll use custom nameservers"
8. **Delete existing nameservers** (if any)
9. **Add Railway's 4 nameservers**:
   - Paste each nameserver from Railway
   - Example:
     ```
     ns-1224.awsdns-32.org
     ns-1224.awsdns-32.com
     ns-1224.awsdns-33.net
     ns-1224.awsdns-33.co.uk
     ```
10. Click "Save"
11. You'll see message: "Changes may take 24-48 hours to propagate"

✅ **This is normal** - DNS changes take time!

#### Step 4.4: Verify DNS is Working (After 24-48 hours)
1. Go back to Railway dashboard
2. Refresh the Domains page
3. If DNS propagated, you'll see: ✅ "Domain connected"
4. Open a new browser tab and visit: `https://your-domain.com`
5. Your site should now load!

---

### Phase 5: Testing Your Live Site (5 minutes)

#### Step 5.1: Test All Pages
Open your domain and test:

- [ ] Homepage loads
- [ ] Navigation links work
- [ ] Style and images display correctly
- [ ] Gallery loads (click images to open lightbox)
- [ ] Treatment page works
- [ ] About page displays
- [ ] Panchakarma page shows
- [ ] Contact form displays

#### Step 5.2: Test Contact Form
1. Go to Contact page
2. Fill form:
   - Name: Test
   - Email: your-email@gmail.com
   - Phone: 1234567890
   - Message: Testing form
3. Click "Send Message"
4. You should see: ✅ "Message sent successfully!"
5. Check `/data` folder on Railway - Excel file should exist

#### Step 5.3: Test on Mobile
1. Open your domain on phone
2. Test hamburger menu
3. Click links
4. View gallery on mobile

#### Step 5.4: Check Console for Errors
1. On your domain, press F12 (or right-click → Inspect)
2. Go to "Console" tab
3. Should show: ✅ No red errors
4. Should see logs from your app

---

### Phase 6: Post-Deployment Optimization (Optional but Recommended)

#### Step 6.1: Enable HTTPS
✅ **Already done!** Railway auto-enables HTTPS on custom domains

#### Step 6.2: Setup Email Notifications (Optional)
If you want contact form emails sent to you:

1. In Railway editor, open `server/index.js`
2. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
3. Add email configuration code (see DEPLOYMENT.md for details)

#### Step 6.3: Monitor Site Performance
1. Use Google Lighthouse: https://pagespeed.web.dev/
2. Paste your domain
3. Target score: 80+
4. Make optimizations if needed

---

## 🎯 Quick Reference Timeline

| Step | Time | Difficulty |
|------|------|-----------|
| 1. GitHub setup | 5 min | Easy ⭐ |
| 2. Railway setup | 5 min | Easy ⭐ |
| 3. Environment vars | 2 min | Very Easy ⭐ |
| 4. GoDaddy DNS config | 10 min | Medium ⭐⭐ |
| 5. Wait for DNS | 24-48 hrs | N/A |
| 6. Test & verify | 5 min | Easy ⭐ |
| **Total Hands-on Time** | **27 min** | - |

---

## 🚨 Troubleshooting

### Issue: "Repository not found" when pushing to GitHub
**Solution**:
1. Make sure you created the GitHub repository first
2. Replace `YOUR_GITHUB_USERNAME` with your actual username
3. Check your GitHub token permissions:
   ```powershell
   git remote -v
   # Should show: origin https://github.com/YOUR_USERNAME/sri-ayurveda-website.git
   ```

### Issue: Build fails in Railway
**Solution**:
1. Check Railway build logs (should show specific error)
2. Verify .env variables are set in Railway dashboard
3. Try rebuilding: Click "Redeploy" in Railway
4. Check `VITE_API_URL` environment variable syntax

### Issue: Domain not working after 48 hours
**Solution**:
1. Clear browser cache: Press Ctrl+Shift+Delete
2. Use incognito/private window
3. Check DNS propagation: https://www.whatsmydns.net
4. Verify nameservers in GoDaddy match Railway

### Issue: Contact form not saving data
**Solution**:
1. Check Railway project has persistent storage
2. Verify `/data` folder created in Railway
3. Check browser console (F12) for error messages
4. Verify `VITE_API_URL` in .env matches your domain

### Issue: Images not loading on live site
**Solution**:
1. Images should be in `/src/images/` (they are bundled)
2. Check browser DevTools Network tab (F12 → Network)
3. Should show images loading from `/assets/...`
4. If 404 errors, rebuild: `npm run build`

---

## ✅ Final Verification Checklist

After domain is live (24-48 hours):

- [ ] Site accessible at https://your-domain.com
- [ ] All pages load without errors
- [ ] HTTPS working (padlock icon in browser)
- [ ] Images load correctly
- [ ] Gallery lightbox works
- [ ] Navigation menu responsive on mobile
- [ ] Contact form submits and returns success
- [ ] No console errors (F12 → Console tab)
- [ ] GoDaddy domain points to Railway
- [ ] DNS propagated globally (check whatsmydns.net)

---

## 📞 Key Accounts & Links

| Service | Link | Your Account |
|---------|------|--------------|
| GitHub | https://github.com | YOUR_USERNAME |
| Railway | https://railway.app | Connected via GitHub |
| GoDaddy | https://godaddy.com | your-email@gmail.com |
| Your Site | https://your-domain.com | ✅ Live! |

---

## 🎉 Success Indicators

When everything is working:

1. ✅ You can access your site via domain in browser
2. ✅ HTTPS protocol shows (padlock icon)
3. ✅ All pages load under 3 seconds
4. ✅ Contact form submits successfully
5. ✅ No console errors or warnings
6. ✅ Images appear with correct styling
7. ✅ Mobile responsive works

---

## 📝 Important Notes

### Automatic Deployments
- Every time you `git push` to GitHub, Railway automatically rebuilds and redeploys
- Build takes ~2-3 minutes
- No downtime during deployment

### Environment Variables
- `NODE_ENV=production` enables production mode
- `VITE_API_URL` must match your domain (used by contact form)
- These are set in Railway dashboard (NOT in .env file)

### Contact Form Data
- Excel files saved in `/data` folder on Railway
- Named by month: `2026-02.xlsx`
- Each month is a new file

### Domain Propagation
- DNS changes can take up to 48 hours
- Usually works in 1-4 hours
- Check progress: https://www.whatsmydns.net

### Redeploy After Changes
If you make code changes:
```powershell
git add .
git commit -m "Description of changes"
git push origin main
# Railway will auto-deploy in 2-3 minutes
```

---

## 🆘 Need Help?

**If something doesn't work:**

1. **Check Railway Logs**:
   - Railway Dashboard → Your Project → Logs
   - Look for error messages

2. **Check Browser Console**:
   - Press F12 → Console tab
   - Look for red errors

3. **Common Solutions**:
   - Refresh browser (Ctrl+R or Cmd+R)
   - Clear browser cache (Ctrl+Shift+Delete)
   - Wait for DNS to propagate (24-48 hrs)
   - Check environment variables in Railway
   - Verify GitHub push was successful

4. **Contact Railway Support**:
   - Railway has 24/7 support chat
   - Very responsive and helpful

---

## 🎯 You're Ready!

Follow these steps in order, and your site will be live on your custom domain within 48 hours. The hardest part is the DNS propagation waiting - everything else is straightforward!

**Start with Step 1.1 and work through sequentially.** ✨

Good luck! Your Sri Ayurveda website will be live soon! 🌿
