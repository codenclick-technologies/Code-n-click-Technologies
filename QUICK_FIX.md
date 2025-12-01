# 🚨 URGENT FIX: Backend Not Running - "Failed to fetch" Error

## The Problem
Your login is failing because the **backend server is NOT running**. The error "Failed to fetch" means the frontend at `http://localhost:5173` cannot connect to the backend API at `http://localhost:3000`.

## 🎯 Quick Solution (Choose One)

### ✅ OPTION 1: Use Local PostgreSQL (Recommended)

If you have PostgreSQL installed locally:

1. **Update the `.env` file** in the `server` folder:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/code_n_click?schema=public"
```
Replace `YOUR_PASSWORD` with your PostgreSQL password.

2. **Create the database**:
```sql
-- Open PostgreSQL command line (psql) and run:
CREATE DATABASE code_n_click;
```

3. **Run these commands** in the `server` directory:
```bash
cd server
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

### ✅ OPTION 2: Start Docker Desktop

If you have Docker Desktop installed:

1. **Start Docker Desktop** application
2. Wait for it to fully start (whale icon in system tray should be stable)
3. **Run these commands**:
```bash
cd server
docker-compose up -d
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

### ✅ OPTION 3: Install Docker Desktop (If not installed)

1. Download from: https://www.docker.com/products/docker-desktop
2. Install and start Docker Desktop
3. Follow Option 2 steps above

## 🔍 How to Verify Backend is Running

After starting the backend, you should see:

```
✅ Database connected successfully
[Nest] LOG [NestApplication] Nest application successfully started

  ╔══════════════════════════════════════════════════════════════╗
  ║                                                              ║
  ║   🚀 Company Management System API                          ║
  ║                                                              ║
  ║   Server running on: http://localhost:3000                   ║
  ║   API Endpoint: http://localhost:3000/api                    ║
  ║   Swagger Docs: http://localhost:3000/api/docs              ║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
```

**Test it:** Open `http://localhost:3000/api/docs` in your browser

## 📋 Test Credentials (After Seeding)

Once the backend is running and seeded:

| Role | Email | Password |
|------|-------|----------|
| OWNER | owner@codenclick.com | Owner@123 |
| HR | hr@codenclick.com | HR@123 |
| MANAGER | manager@codenclick.com | Manager@123 |
| EMPLOYEE | employee@codenclick.com | Employee@123 |

## ⚡ Quick Commands (Copy & Paste)

**For Local PostgreSQL:**
```bash
cd server
npx prisma generate && npx prisma migrate dev --name init && npm run prisma:seed && npm run start:dev
```

**For Docker:**
```bash
cd server
docker-compose up -d && npx prisma generate && npx prisma migrate dev --name init && npm run prisma:seed && npm run start:dev
```

## 🐛 Still Having Issues?

### Error: "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Error: "Cannot connect to database"
- Make sure PostgreSQL is running
- Check your DATABASE_URL in `.env`
- Verify database `code_n_click` exists

### Error: "Prisma Client not generated"
```bash
npx prisma generate
```

## 📞 What to Do Next

1. Choose Option 1, 2, or 3 above
2. Run the commands
3. Wait for the success message
4. Go to `http://localhost:5173/login`
5. Login with: `owner@codenclick.com` / `Owner@123`

---

**Current Status:** ❌ Backend NOT running  
**Required:** ✅ Start backend server first!
