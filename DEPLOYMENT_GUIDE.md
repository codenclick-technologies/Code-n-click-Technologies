# 🚀 Deployment Guide - Full Stack Application

This guide will help you deploy your **NestJS + Prisma** backend and **Vite + React** frontend to production with a working backend.

## 📋 Table of Contents

1. [Quick Summary](#quick-summary)
2. [Push to GitHub](#push-to-github)
3. [Backend Deployment Options](#backend-deployment-options)
4. [Frontend Deployment](#frontend-deployment)
5. [Environment Variables](#environment-variables)
6. [Post-Deployment Setup](#post-deployment-setup)

---

## 🎯 Quick Summary

Your application consists of:
- **Backend**: NestJS + Prisma + PostgreSQL
- **Frontend**: Vite + React

**Recommended Stack:**
- Backend: [Render.com](https://render.com) or [Railway.app](https://railway.app) (Free tier available)
- Database: Render PostgreSQL or Railway PostgreSQL (Free tier available)
- Frontend: [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (Free tier available)

---

## 📦 Push to GitHub

### Step 1: Improve .gitignore

First, ensure your `.gitignore` is complete:

```bash
# Navigate to project root
cd "c:\Users\Lokender Chauhan\Desktop\code-n-click Technologies"
```

Update `.gitignore`:

```gitignore
# Dependencies
node_modules
client/node_modules
server/node_modules

# Environment variables
.env
.env.local
.env.production
.env.development
client/.env
server/.env
server/.env.production

# Build outputs
dist
build
client/dist
server/dist
client/build
server/build

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
server/build_error.log

# IDEs
.vscode
.idea
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Database
*.db
*.sqlite
*.sqlite3

# Prisma
server/prisma/migrations/**/*.sql
```

### Step 2: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full stack application"

# Create a new repository on GitHub.com (via web interface)
# Then link your local repo to GitHub:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Backend Deployment Options

### Option 1: Render.com (Recommended for beginners)

#### A. Create PostgreSQL Database

1. Go to [render.com](https://render.com) and sign up
2. Click **New** → **PostgreSQL**
3. Configure:
   - Name: `code-n-click-db`
   - Database: `code_n_click`
   - User: `admin`
   - Region: Select nearest to you
   - Plan: **Free**
4. Click **Create Database**
5. Copy the **Internal Database URL** (starts with `postgresql://`)

#### B. Deploy Backend

1. Click **New** → **Web Service**
2. Connect your GitHub repository
3. Configure:
   - Name: `code-n-click-backend`
   - Environment: **Node**
   - Region: Same as database
   - Branch: `main`
   - Root Directory: `server`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npx prisma migrate deploy && npm run start:prod`
   - Plan: **Free**

4. Add Environment Variables:
   ```
   DATABASE_URL=<your-internal-database-url>
   JWT_SECRET=<generate-a-strong-random-string>
   JWT_REFRESH_SECRET=<generate-another-strong-random-string>
   NODE_ENV=production
   PORT=10000
   ```

5. Click **Create Web Service**

#### C. Get Backend URL

After deployment, your backend will be available at:
```
https://code-n-click-backend.onrender.com
```

---

### Option 2: Railway.app (Modern alternative)

1. Go to [railway.app](https://railway.app) and sign up
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your repository
4. Click **Add PostgreSQL** (Railway will auto-provision)
5. Configure backend service:
   - Root Directory: `/server`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npx prisma migrate deploy && npm run start:prod`
6. Add environment variables (Railway auto-adds `DATABASE_URL`)
7. Deploy!

---

### Option 3: Heroku (Paid, but reliable)

```bash
# Install Heroku CLI
# Then:
heroku login
heroku create your-app-name
heroku addons:create heroku-postgresql:mini

# Set environment variables
heroku config:set JWT_SECRET=your-secret
heroku config:set JWT_REFRESH_SECRET=your-refresh-secret
heroku config:set NODE_ENV=production

# Add Procfile in server directory
echo "web: npx prisma migrate deploy && npm run start:prod" > server/Procfile

# Deploy
git push heroku main
```

---

## 🎨 Frontend Deployment

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **New Project**
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Vite**
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variable:
   ```
   VITE_API_URL=https://code-n-click-backend.onrender.com
   ```
6. Click **Deploy**

Your frontend will be live at: `https://your-project.vercel.app`

---

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select your repository
4. Configure:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
5. Add Environment Variable:
   ```
   VITE_API_URL=https://code-n-click-backend.onrender.com
   ```
6. Click **Deploy**

---

### Option 3: GitHub Pages (Static only, limited backend support)

⚠️ **Important**: GitHub Pages only hosts static files. You **cannot** host your NestJS backend on GitHub Pages.

For static frontend only:

```bash
# Install gh-pages
cd client
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔐 Environment Variables

### Backend (.env in server/)

Create `server/.env.production`:

```env
# Database
DATABASE_URL="<your-production-database-url>"

# JWT Secrets (generate strong random strings)
JWT_SECRET="<generate-using: openssl rand -base64 32>"
JWT_REFRESH_SECRET="<generate-using: openssl rand -base64 32>"

# Server
NODE_ENV=production
PORT=10000

# AWS S3 (if using file uploads)
AWS_ACCESS_KEY_ID=<your-aws-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret>
AWS_REGION=us-east-1
AWS_S3_BUCKET=<your-bucket-name>

# Cloudinary (if using image uploads)
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>

# OpenAI (if using AI features)
OPENAI_API_KEY=<your-openai-key>

# CORS
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

### Frontend (.env in client/)

Create `client/.env.production`:

```env
VITE_API_URL=https://your-backend.onrender.com
```

Update your `client/src` API calls to use:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

---

## 🔧 Post-Deployment Setup

### 1. Run Database Migrations

After backend deployment, migrations should run automatically. If not:

```bash
# SSH into your backend service (Render/Railway provide web terminal)
npx prisma migrate deploy
```

### 2. Seed Database (Optional)

```bash
npm run prisma:seed
```

### 3. Test Your API

```bash
curl https://your-backend.onrender.com/health
```

### 4. Update CORS Settings

In `server/src/main.ts`, update CORS:

```typescript
app.enableCors({
  origin: [
    'https://your-frontend.vercel.app',
    'http://localhost:5173', // For local development
  ],
  credentials: true,
});
```

### 5. Update Frontend API Endpoints

Create `client/src/config/api.ts`:

```typescript
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  AUTH: `${API_URL}/auth`,
  USERS: `${API_URL}/users`,
  JOBS: `${API_URL}/jobs`,
  // ... add all your endpoints
};
```

---

## 📊 Monitoring & Logs

### Render
- Logs: Go to your service → **Logs** tab
- Metrics: **Metrics** tab shows CPU/memory usage

### Railway
- Logs: Click on your service → **Deployments** → **View Logs**
- Metrics: Built-in metrics dashboard

### Vercel
- Logs: Go to your project → **Deployments** → Click deployment → **View Function Logs**

---

## 🐛 Troubleshooting

### Backend won't start
- Check logs for errors
- Verify `DATABASE_URL` is correct
- Ensure Prisma migrations ran: `npx prisma migrate deploy`

### Frontend can't connect to backend
- Verify `VITE_API_URL` is set correctly
- Check CORS settings in backend
- Check browser console for errors

### Database connection errors
- Ensure database is in same region as backend
- Use **Internal Database URL** (faster, free)
- Check if database is active

---

## 🎉 Success!

Your application should now be live:
- **Frontend**: https://your-project.vercel.app
- **Backend**: https://your-backend.onrender.com
- **Database**: Managed by your hosting provider

---

## 🔄 Continuous Deployment

Both Vercel and Render support automatic deployments:
1. Push to GitHub `main` branch
2. Services auto-detect changes
3. Build and deploy automatically
4. Monitor deployment status in dashboard

---

## 💰 Cost Breakdown (Free Tier)

| Service | Free Tier | Limitations |
|---------|-----------|-------------|
| Render PostgreSQL | ✅ Free | 90 days, then expires |
| Render Web Service | ✅ Free | Sleeps after 15 min inactivity |
| Railway | ✅ $5 credit/month | ~500 hours runtime |
| Vercel | ✅ Free | Unlimited bandwidth |
| Netlify | ✅ Free | 100GB bandwidth/month |

**Recommendation**: Start with Render (backend + DB) + Vercel (frontend) for complete free tier.

---

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Vercel Documentation](https://vercel.com/docs)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
- [NestJS Deployment Docs](https://docs.nestjs.com/deployment)

---

**Need help?** Feel free to ask questions or open issues in your GitHub repository!
