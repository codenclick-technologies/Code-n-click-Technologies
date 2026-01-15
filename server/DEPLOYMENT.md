# Vercel पर Backend Deployment Guide

यह guide आपको step-by-step बताएगी कि NestJS backend को Vercel पर कैसे deploy करें।

## 📋 Prerequisites (पहले से Required चीज़ें)

- ✅ Vercel account (free tier काफी है)
- ✅ GitHub repository (आपके पास पहले से है)
- ✅ PostgreSQL database (Vercel Postgres, Neon, Supabase, या कोई और)

---

## 🚀 Deployment Steps

### Step 1: Database Setup

पहले production database setup करें। दो options हैं:

#### Option A: Vercel Postgres (Recommended)

1. Vercel dashboard खोलें
2. **Storage** tab पर जाएं
3. **Add New** → **Postgres Database** select करें
4. Database name दें (जैसे `codenclick-db`)
5. **Create** button click करें
6. Connection string automatically environment variables में add हो जाएगी

#### Option B: External Database (Neon/Supabase)

1. [Neon](https://neon.tech) या [Supabase](https://supabase.com) पर account बनाएं
2. New PostgreSQL database create करें
3. Connection string copy करें (format: `postgresql://...`)

### Step 2: Vercel पर Project Import करें

आपने यह already screenshot में दिखाया है। बस confirm करें:

1. **Vercel Team**: Codenclick Technology' Hobby
2. **Project Name**: `server`
3. **Framework Preset**: Express
4. **Root Directory**: `server`
5. **Build Command**: `npm run vercel-build` (auto-detected)

### Step 3: Environment Variables Set करें

यह सबसे important step है! Vercel dashboard में:

1. **Build and Output Settings** section expand करें
2. नीचे **Environment Variables** section expand करें
3. निम्नलिखित variables add करें:

#### Required Variables:

```bash
# Database
DATABASE_URL = postgresql://username:password@host:port/database?schema=public
# ☝️ Vercel Postgres से automatically मिलेगा या external database का connection string paste करें

# JWT Secrets
JWT_SECRET = your-super-secret-jwt-key-min-32-characters-long
JWT_REFRESH_SECRET = your-super-secret-refresh-key-min-32-characters-long

# Application
NODE_ENV = production
PORT = 3000
API_PREFIX = api

# CORS - अपना frontend URL डालें
CORS_ORIGIN = https://codenclick.in

# Rate Limiting
THROTTLE_TTL = 60
THROTTLE_LIMIT = 100
```

#### JWT Secrets Generate करने के लिए:

अपने terminal में यह command run करें:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

दो बार run करें - एक `JWT_SECRET` के लिए, एक `JWT_REFRESH_SECRET` के लिए।

#### Optional Variables (अगर file uploads use कर रहे हैं):

```bash
# AWS S3
AWS_REGION = us-east-1
AWS_ACCESS_KEY_ID = your-key
AWS_SECRET_ACCESS_KEY = your-secret
AWS_S3_BUCKET = your-bucket

# या Cloudinary
CLOUDINARY_CLOUD_NAME = your-cloud-name
CLOUDINARY_API_KEY = your-api-key
CLOUDINARY_API_SECRET = your-api-secret
```

### Step 4: Deploy करें

सभी environment variables set करने के बाद:

1. नीचे scroll करें
2. **Deploy** button click करें
3. Vercel build start कर देगा (2-3 minutes लगेंगे)

### Step 5: Database Migration (First Time Only)

Deployment successful होने के बाद, database tables create करने हैं:

1. Vercel dashboard में अपनी deployed project खोलें
2. **Settings** → **General** → **Command Palette** (या command line से)
3. Terminal में Prisma migration run करें:

```bash
# Option 1: Vercel CLI से (local terminal)
vercel env pull .env.production.local
npx prisma migrate deploy

# Option 2: Vercel dashboard से
# Settings → Functions → Serverless Function Configuration
# Add command: npx prisma migrate deploy
```

---

## ✅ Verification (सब कुछ सही है या नहीं)

### Test 1: Health Check

अपने deployed URL को browser में खोलें:

```
https://server-sepia-alpha.vercel.app/api
```

यह आपको API welcome message दिखाना चाहिए।

### Test 2: Swagger Documentation

```
https://server-sepia-alpha.vercel.app/api/docs
```

यहां सभी API endpoints की list दिखनी चाहिए।

### Test 3: Login Test

Browser के DevTools console में यह run करें (अपना email/password use करें):

```javascript
fetch('https://server-sepia-alpha.vercel.app/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
})
  .then(res => res.json())
  .then(data => console.log('✅ Login Response:', data))
  .catch(err => console.error('❌ Error:', err));
```

Success होने पर आपको JWT token मिलना चाहिए।

### Test 4: CORS Check

Frontend से login attempt करें और Network tab में check करें:

- ✅ Response headers में `access-control-allow-origin` present है
- ✅ Response headers में `access-control-allow-credentials: true` है
- ❌ Console में कोई CORS error नहीं होना चाहिए

---

## 🔧 Troubleshooting (अगर कोई problem आए)

### Problem 1: "Database connection failed"

**Solution**:
1. Vercel dashboard → Settings → Environment Variables
2. `DATABASE_URL` check करें - सही format में है?
3. Database service (Neon/Supabase) में connection limit check करें
4. Vercel logs में exact error देखें

### Problem 2: "CORS error" Frontend में

**Solution**:
1. `CORS_ORIGIN` environment variable सही URL है?
2. Trailing slash नहीं होना चाहिए (❌ `https://codenclick.in/`)
3. Protocol check करें (`https://` vs `http://`)
4. Redeploy करें environment variables update करने के बाद

### Problem 3: "JWT token invalid"

**Solution**:
1. Check करें कि `JWT_SECRET` और `JWT_REFRESH_SECRET` set हैं
2. Secrets minimum 32 characters long होने चाहिए
3. Redeploy करें

### Problem 4: Build fail हो रही है

**Solution**:
1. Vercel logs में error देखें
2. Check करें कि `Root Directory` सही set है: `server`
3. Check करें कि `package.json` में `vercel-build` script है
4. Local में test करें: `npm run vercel-build`

---

## 📱 Frontend को Update करें

Backend deploy होने के बाद, frontend में API URL update करें:

```javascript
// Frontend .env file
VITE_API_URL=https://server-sepia-alpha.vercel.app/api

# या custom domain use करें
VITE_API_URL=https://api.codenclick.in/api
```

---

## 🎯 Custom Domain (Optional)

Custom domain add करने के लिए:

1. Vercel dashboard → **Settings** → **Domains**
2. अपना domain add करें (जैसे `api.codenclick.in`)
3. DNS records update करें (Vercel instructions देगा)
4. Frontend में `CORS_ORIGIN` और API URL update करें

---

## 📊 Monitoring

Deployment के बाद monitor करने के लिए:

- **Logs**: Vercel dashboard → Deployments → [latest deployment] → View Function Logs
- **Error Tracking**: Logs में errors automatically दिखेंगे
- **Performance**: Vercel Analytics enable कर सकते हैं

---

## 🔄 Re-deployment

Code में changes करने पर:

1. GitHub पर push करें
2. Vercel automatically detect करके redeploy कर देगा
3. या manually: Vercel dashboard → Deployments → Redeploy

---

## 📞 Support

अगर कोई issue आए तो:

1. Vercel logs check करें
2. Database logs check करें  
3. Frontend console errors check करें
4. Network tab में API requests check करें

---

**Happy Deploying! 🚀**
