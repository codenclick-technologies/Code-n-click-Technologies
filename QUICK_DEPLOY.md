# 🚀 Quick Deploy - Step by Step

Follow these exact steps to deploy your application with a working backend in under 30 minutes.

## ✅ Before You Start

Make sure you have:
- [ ] GitHub account
- [ ] All your code committed locally
- [ ] `.env` files are **NOT** committed (check `.gitignore`)

---

## 📋 Step-by-Step Instructions

### 1️⃣ Push to GitHub (5 minutes)

```bash
# Open terminal in your project root
cd "c:\Users\Lokender Chauhan\Desktop\code-n-click Technologies"

# Check what will be committed
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full stack application ready for deployment"

# Create repository on GitHub.com
# Go to: https://github.com/new
# Repository name: code-n-click-technologies
# Set to Private (recommended)
# Don't initialize with README (you already have one)
# Click "Create repository"

# Link your local repo (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/code-n-click-technologies.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Checkpoint**: Your code is now on GitHub!

---

### 2️⃣ Deploy Backend to Render (10 minutes)

**A. Create Database**

1. Go to https://render.com and click **Sign Up** (use GitHub)
2. Click **New** → **PostgreSQL**
3. Fill in:
   - Name: `code-n-click-db`
   - Database: `code_n_click_db`
   - User: `admin`
   - Region: Select closest to you (e.g., Oregon USA)
   - PostgreSQL Version: 15
   - Plan: **Free**
4. Click **Create Database**
5. Wait 2-3 minutes for database to be ready
6. **IMPORTANT**: Copy the **Internal Database URL** (starts with `postgresql://`)
   - It will look like: `postgresql://admin:xxxxx@dpg-xxxxx-a/code_n_click_db`
   - Save this somewhere safe!

**B. Deploy Backend Service**

1. Still on Render, click **New** → **Web Service**
2. Click **Connect a repository** → Select your GitHub repo
3. Fill in:
   - Name: `code-n-click-backend`
   - Environment: **Node**
   - Region: **Same as your database**
   - Branch: `main`
   - Root Directory: `server`
   - Build Command: 
     ```
     npm install && npx prisma generate && npm run build
     ```
   - Start Command:
     ```
     npx prisma migrate deploy && npm run start:prod
     ```
   - Plan: **Free** (this will sleep after 15 min inactivity)

4. Click **Advanced** → **Add Environment Variables**

   Add these one by one (click "+ Add Environment Variable" for each):

   | Key | Value |
   |-----|-------|
   | `DATABASE_URL` | Paste the Internal Database URL you copied |
   | `JWT_SECRET` | `your-super-secret-jwt-key-change-in-production` |
   | `JWT_REFRESH_SECRET` | `your-super-secret-refresh-key-change-in-production` |
   | `NODE_ENV` | `production` |
   | `PORT` | `10000` |
   | `CORS_ORIGIN` | `*` (we'll update this later) |

   **Optional** (add if you use these services):
   - AWS keys (if using S3)
   - Cloudinary keys (if using Cloudinary)
   - OpenAI key (if using AI features)

5. Click **Create Web Service**

6. Wait 5-10 minutes for deployment (watch the logs)

7. Once deployed, copy your backend URL:
   - It will be: `https://code-n-click-backend.onrender.com`
   - **Save this URL!**

✅ **Checkpoint**: Test your backend by visiting:
```
https://code-n-click-backend.onrender.com/api
```
You should see the Swagger API documentation!

---

### 3️⃣ Deploy Frontend to Vercel (10 minutes)

1. Go to https://vercel.com and click **Sign Up** (use GitHub)
2. Click **Add New...** → **Project**
3. **Import** your GitHub repository (`code-n-click-technologies`)
4. Configure Project:
   - Framework Preset: **Vite**
   - Root Directory: Click **Edit** → Select `client`
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)
   - Install Command: `npm install` (should be auto-detected)

5. Click **Environment Variables** → Add:
   
   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | Your Render backend URL (e.g., `https://code-n-click-backend.onrender.com`) |

6. Click **Deploy**

7. Wait 2-3 minutes for deployment

8. Once deployed, copy your frontend URL:
   - It will be: `https://your-project-name.vercel.app`
   - Or custom: `https://code-n-click.vercel.app`

✅ **Checkpoint**: Visit your frontend URL - your app should be live!

---

### 4️⃣ Update CORS (5 minutes)

Now that you have your frontend URL, update your backend CORS settings:

1. Go back to Render dashboard
2. Click on your **backend service** (`code-n-click-backend`)
3. Click **Environment** (left sidebar)
4. Find `CORS_ORIGIN` and click **Edit**
5. Change value from `*` to your Vercel URL:
   ```
   https://your-project-name.vercel.app
   ```
6. Click **Save Changes**
7. Your backend will automatically redeploy (takes 2-3 min)

✅ **Checkpoint**: Your app should now work perfectly with proper CORS!

---

### 5️⃣ Test Everything (5 minutes)

Visit your deployed app and test:

- ✅ Homepage loads
- ✅ Can navigate between pages
- ✅ API calls work (try login/signup if you have auth)
- ✅ No CORS errors in browser console (F12 → Console)
- ✅ Images and assets load

---

## 🎉 Success!

Your app is now live! Here's what you have:

| Component | URL | Auto-Deploy |
|-----------|-----|-------------|
| 🌐 **Frontend** | `https://your-project.vercel.app` | ✅ Yes (on git push) |
| 🚀 **Backend** | `https://code-n-click-backend.onrender.com` | ✅ Yes (on git push) |
| 🗄️ **Database** | Managed by Render | ✅ Always on |

---

## 🔄 Making Updates

From now on, to deploy updates:

```bash
# Make your changes
# Then:
git add .
git commit -m "Your update message"
git push

# That's it! Vercel and Render will auto-deploy
```

---

## ⚠️ Important Notes

### Free Tier Limitations

**Render Backend (Free)**
- ⏰ Sleeps after 15 minutes of inactivity
- 🐌 Cold start takes 30-60 seconds when waking up
- 💾 Database expires after 90 days
- 📦 512 MB RAM, 0.1 CPU

**Solution**: Upgrade to paid plan ($7/month) for always-on service, or use Railway.

**Vercel Frontend (Free)**
- ✅ No sleep, always fast
- ✅ Unlimited bandwidth
- ✅ Great performance
- 🎉 Perfect for frontend hosting

### Production Readiness

Before going live with real users:

1. **Generate Strong Secrets**
   ```bash
   # On Windows PowerShell:
   -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
   
   # Or online: https://randomkeygen.com/
   ```
   Update `JWT_SECRET` and `JWT_REFRESH_SECRET` with these values

2. **Enable HTTPS Only**
   - Both Render and Vercel provide free SSL automatically ✅

3. **Set Up Monitoring**
   - Render: Built-in logs and metrics
   - Vercel: Built-in analytics
   - Consider: Sentry for error tracking

4. **Database Backups**
   - Render Free tier: No automatic backups
   - Render Paid tier: Daily backups included
   - Manual backup: `pg_dump` your database regularly

---

## 🆘 Troubleshooting

### Backend shows "Service Unavailable"
- Check Render logs: Dashboard → Your Service → Logs
- Common issues:
  - Database connection failed (check `DATABASE_URL`)
  - Prisma migration failed (check logs for errors)
  - Build failed (check build logs)

### Frontend can't reach backend
- Check `VITE_API_URL` in Vercel environment variables
- Check CORS settings on Render
- Open browser console (F12) for error messages

### Database connection errors
- Make sure you're using the **Internal Database URL** (not External)
- Check database is in same region as backend
- Verify database status in Render dashboard

### "Cold start" is too slow
- Free tier limitation
- Options:
  1. Upgrade to Render paid ($7/month for always-on)
  2. Use Railway (better free tier)
  3. Use a "keep-alive" service (ping your backend every 14 minutes)

---

## 💡 Next Steps

- [ ] Set up custom domain
- [ ] Configure email service for password resets
- [ ] Add monitoring (Sentry, LogRocket)
- [ ] Set up CI/CD testing
- [ ] Configure database backups
- [ ] Add staging environment

---

## 📞 Get Help

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Your Backend Logs**: Render Dashboard → Your Service → Logs
- **Your Frontend Logs**: Vercel Dashboard → Your Project → Deployments → Logs

---

**Congratulations! 🎊 Your full-stack app is deployed!**
