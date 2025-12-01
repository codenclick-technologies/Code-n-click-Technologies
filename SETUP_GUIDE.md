# 🚀 Quick Setup Guide - Code'N'Click Platform

## Prerequisites
- Node.js (v18+)
- PostgreSQL (v15+)
- npm or yarn

## 📦 Backend Setup

### 1. Start PostgreSQL Database
```bash
cd server
docker-compose up -d
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Setup Environment
```bash
# Copy .env.example to .env (already created)
# The .env file is already configured with default values
```

### 4. Run Database Migrations
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Seed Database with Test Accounts
```bash
npm run prisma:seed
```

This will create test accounts:
- **OWNER**: `owner@codenclick.com` / `Owner@123`
- **HR**: `hr@codenclick.com` / `HR@123`
- **MANAGER**: `manager@codenclick.com` / `Manager@123`
- **EMPLOYEE**: `employee@codenclick.com` / `Employee@123`

### 6. Start Backend Server
```bash
npm run start:dev
```

Backend will run on: `http://localhost:3000`
Swagger API Docs: `http://localhost:3000/api/docs`

## 🎨 Frontend Setup

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Start Frontend
```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

## 🔐 Login Instructions

1. Open `http://localhost:5173/login`
2. Use any of the test credentials above
3. You'll be redirected to the appropriate dashboard based on your role

### Role-Based Dashboards
- **EMPLOYEE** → `/dashboard/employee`
- **HR** → `/dashboard/hr`
- **MANAGER** → `/dashboard/manager`
- **OWNER** → `/dashboard/owner`

## 🧪 Testing the System

### Test Authentication
1. Login with `owner@codenclick.com` / `Owner@123`
2. You should see the Owner dashboard

### Test Career Portal
1. Visit `http://localhost:5173/careers`
2. You should see 2 sample jobs
3. Try searching and filtering
4. Click "Apply Now" to test job application

### Test API with Swagger
1. Open `http://localhost:3000/api/docs`
2. Click "Authorize" button
3. Login to get access token
4. Test any endpoint

## 📝 Creating New Users

### Via Swagger UI
1. Login as OWNER
2. Go to `/api/auth/admin/create-user`
3. Create new users with any role

### Via Code
```typescript
// OWNER can create any role
// HR can only create EMPLOYEE
POST /api/auth/admin/create-user
{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "Password@123",
  "role": "EMPLOYEE",
  "mustChangePassword": true
}
```

## 🔧 Troubleshooting

### Backend won't start
- Check if PostgreSQL is running: `docker ps`
- Check if port 3000 is available
- Run `npx prisma generate` again

### Frontend won't connect to backend
- Verify backend is running on port 3000
- Check `.env` file has `VITE_API_URL=http://localhost:3000/api`
- Clear browser cache and reload

### Login not working
- Ensure database is seeded: `npm run prisma:seed`
- Check backend logs for errors
- Verify credentials are correct

### Database errors
- Reset database: `npx prisma migrate reset`
- Re-run migrations: `npx prisma migrate dev`
- Re-seed: `npm run prisma:seed`

## 📚 Additional Resources

- Backend API Documentation: `http://localhost:3000/api/docs`
- Prisma Studio (Database GUI): `npx prisma studio`
- Backend README: `server/README.md`

## 🎯 Next Steps

1. ✅ Login with test credentials
2. ✅ Explore the career portal
3. ✅ Test job applications
4. ✅ Create new users as OWNER
5. ✅ Explore Swagger API docs
6. ✅ Build your dashboards!

---

**Need help?** Check the backend logs or frontend console for detailed error messages.
