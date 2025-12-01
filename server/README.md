# Company Management System - Backend API

Production-ready backend system built with NestJS, Prisma, and PostgreSQL for comprehensive company management.

## 🚀 Features

### Core Modules
- **Authentication & Authorization** - JWT-based auth with role-based access control (RBAC)
- **User Management** - Complete user CRUD with role management
- **Employee Management** - Employee profiles with department tracking
- **Career Portal & Jobs** - Job postings with public/protected endpoints
- **Application Management** - ATS-lite with resume upload and candidate tracking
- **Task Management** - Task assignment, tracking, comments, and attachments
- **Notifications & Banners** - Website notifications with scheduling
- **Dashboard & Analytics** - Real-time analytics and chart data

### Technical Features
- ✅ Role-Based Access Control (4 roles: EMPLOYEE, HR, MANAGER, OWNER)
- ✅ JWT Authentication (access + refresh tokens)
- ✅ File Upload Support (local & S3-compatible)
- ✅ Comprehensive Search & Filtering
- ✅ Pagination on all list endpoints
- ✅ Swagger/OpenAPI Documentation
- ✅ Global Error Handling
- ✅ Request/Response Logging
- ✅ Rate Limiting
- ✅ Security Headers (Helmet)
- ✅ CORS Configuration
- ✅ Input Validation

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v15 or higher)
- npm or yarn

## 🛠️ Installation

### 1. Clone and Install Dependencies

```bash
cd server
npm install --legacy-peer-deps
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update the following variables in `.env`:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/code_n_click?schema=public"

# JWT Secrets (CHANGE THESE IN PRODUCTION!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this-in-production

# Storage (use 'local' for development, 's3' for production)
STORAGE_TYPE=local
UPLOAD_PATH=./uploads

# CORS
CORS_ORIGIN=http://localhost:5173
```

### 3. Start PostgreSQL Database

**Option A: Using Docker (Recommended)**

```bash
docker-compose up -d
```

This starts PostgreSQL and Redis containers.

**Option B: Local PostgreSQL**

Ensure PostgreSQL is running and create the database:

```sql
CREATE DATABASE code_n_click;
```

### 4. Run Database Migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. (Optional) Seed Database

Create a seed script or use Prisma Studio to add initial data:

```bash
npx prisma studio
```

## 🚀 Running the Application

### Development Mode

```bash
npm run start:dev
```

The server will start on `http://localhost:3000`

### Production Mode

```bash
npm run build
npm run start:prod
```

## 📚 API Documentation

Once the server is running, access the Swagger documentation at:

**http://localhost:3000/api/docs**

## 🔐 Authentication Flow

### 1. Register a User (Public)

```bash
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123"
}
```

### 2. Login

```bash
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

Response includes `accessToken` and `refreshToken`.

### 3. Use Access Token

Add to request headers:

```
Authorization: Bearer <accessToken>
```

### 4. Refresh Token

```bash
POST /api/auth/refresh
{
  "refreshToken": "<refreshToken>"
}
```

## 👥 Role-Based Permissions

### EMPLOYEE
- View own profile
- View assigned tasks
- Update task progress
- Apply to jobs
- View job listings

### HR
- All EMPLOYEE permissions
- Create/manage job postings
- View/manage applications
- Create EMPLOYEE users
- Post notifications

### MANAGER
- View team employees
- Create/assign tasks
- Monitor task progress
- View team analytics
- Create notifications

### OWNER
- Full system access
- Create users with any role
- Manage all data
- Access all analytics
- Override any permissions

## 📁 Project Structure

```
server/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── common/
│   │   ├── decorators/        # Custom decorators
│   │   ├── filters/           # Exception filters
│   │   ├── guards/            # Auth & role guards
│   │   ├── interceptors/      # Logging interceptor
│   │   ├── services/          # Upload service
│   │   └── utils/             # Pagination utilities
│   ├── config/
│   │   └── prisma.service.ts  # Prisma configuration
│   ├── modules/
│   │   ├── auth/              # Authentication
│   │   ├── users/             # User management
│   │   ├── employees/         # Employee profiles
│   │   ├── jobs/              # Job postings
│   │   ├── applications/      # Job applications
│   │   ├── tasks/             # Task management
│   │   ├── notifications/     # Notifications
│   │   └── dashboard/         # Analytics
│   ├── app.module.ts          # Root module
│   └── main.ts                # Application entry
├── .env                       # Environment variables
├── .env.example               # Environment template
├── package.json
└── README.md
```

## 🔄 API Endpoints Overview

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Users (Owner only)
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `GET /api/users/:id` - Get user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Employees (HR/Owner)
- `GET /api/employees` - List employees
- `POST /api/employees` - Create employee profile
- `GET /api/employees/:id` - Get employee
- `PATCH /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Jobs
- `GET /api/jobs/public` - Public job listings
- `GET /api/jobs/public/:id` - Public job details
- `POST /api/jobs` - Create job (HR/Owner)
- `PATCH /api/jobs/:id` - Update job (HR/Owner)
- `PATCH /api/jobs/:id/visibility` - Toggle visibility (HR/Owner)
- `DELETE /api/jobs/:id` - Delete job (HR/Owner)

### Applications
- `POST /api/applications/jobs/:jobId/apply` - Apply to job (Public)
- `GET /api/applications` - List applications (HR/Owner)
- `GET /api/applications/:id` - Get application (HR/Owner)
- `PATCH /api/applications/:id/status` - Update status (HR/Owner)
- `PATCH /api/applications/:id/notes` - Update notes (HR/Owner)

### Tasks
- `GET /api/tasks/my-tasks` - Get my tasks
- `POST /api/tasks` - Create task (Manager/Owner)
- `GET /api/tasks` - List all tasks (Manager/Owner)
- `PATCH /api/tasks/:id` - Update task (Manager/Owner)
- `PATCH /api/tasks/my-tasks/:id` - Update my task
- `POST /api/tasks/:id/comments` - Add comment
- `POST /api/tasks/:id/attachments` - Add attachment

### Notifications
- `GET /api/notifications/active` - Get active notifications (Public)
- `POST /api/notifications` - Create notification (HR/Manager/Owner)
- `GET /api/notifications` - List notifications (HR/Manager/Owner)
- `PATCH /api/notifications/:id` - Update notification
- `PATCH /api/notifications/:id/status` - Toggle status

### Dashboard (Manager/Owner)
- `GET /api/dashboard/summary` - Dashboard summary
- `GET /api/dashboard/tasks-by-status` - Tasks by status chart
- `GET /api/dashboard/applications-by-status` - Applications by status
- `GET /api/dashboard/tasks-by-employee` - Tasks by employee
- `GET /api/dashboard/jobs-by-department` - Jobs by department
- `GET /api/dashboard/application-trend` - Application trend

## 🗄️ Database Schema

The system uses PostgreSQL with Prisma ORM. Key entities:

- **User** - Authentication and user data
- **RefreshToken** - JWT refresh tokens
- **EmployeeProfile** - Extended employee information
- **Job** - Job postings
- **Application** - Job applications with resumes
- **Task** - Task management
- **TaskComment** - Task comments
- **TaskAttachment** - Task file attachments
- **NotificationBanner** - Website notifications

## 📦 File Upload

The system supports both local and S3-compatible storage:

### Local Storage (Development)
```env
STORAGE_TYPE=local
UPLOAD_PATH=./uploads
```

Files are stored in `./uploads` directory.

### S3 Storage (Production)
```env
STORAGE_TYPE=s3
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_S3_BUCKET=your-bucket
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Separate access and refresh tokens
- **Rate Limiting**: Throttle protection on all endpoints
- **CORS**: Configurable origin whitelist
- **Helmet**: Security headers
- **Input Validation**: class-validator on all DTOs
- **SQL Injection Protection**: Prisma ORM parameterized queries

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📊 Monitoring & Logging

- Request/Response logging via interceptor
- Error logging with stack traces
- Prisma query logging (development mode)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables

Ensure all production environment variables are set:
- Change JWT secrets
- Configure production database
- Set up S3 for file storage
- Configure CORS for production domain

### Docker Deployment

```bash
docker build -t company-management-api .
docker run -p 3000:3000 company-management-api
```

## 🤝 Contributing

1. Follow TypeScript and NestJS best practices
2. Maintain consistent code formatting (Prettier)
3. Add proper validation to all DTOs
4. Document new endpoints in Swagger
5. Write tests for new features

## 📝 License

UNLICENSED - Private Company Project

## 🆘 Support

For issues or questions:
1. Check Swagger documentation at `/api/docs`
2. Review error logs
3. Check Prisma schema for data models
4. Verify environment configuration

---

**Built with ❤️ using NestJS, Prisma, and PostgreSQL**
