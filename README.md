# Code-n-Click Technologies

Full-stack company management system with career portal, ATS, task management, and employee management features.

## 🏗️ Tech Stack

### Backend
- **Framework**: NestJS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with Passport
- **File Storage**: AWS S3 / Cloudinary
- **AI Integration**: OpenAI

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd code-n-click-technologies
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env with your database credentials
   
   # Run migrations
   npx prisma migrate dev
   
   # Seed database (optional)
   npm run prisma:seed
   
   # Start development server
   npm run start:dev
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   
   # Create .env file
   echo "VITE_API_URL=http://localhost:3000" > .env
   
   # Start development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000
   - Prisma Studio: `npm run prisma:studio` (in server directory)

## 📁 Project Structure

```
code-n-click/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── config/        # Configuration files
│   │   └── App.jsx        # Main app component
│   └── package.json
│
├── server/                # Backend NestJS application
│   ├── prisma/
│   │   ├── schema.prisma  # Database schema
│   │   └── seed.ts        # Database seeding
│   ├── src/
│   │   ├── modules/       # Feature modules
│   │   ├── common/        # Shared utilities
│   │   └── main.ts        # Application entry
│   └── package.json
│
└── README.md
```

## 🔧 Environment Variables

### Backend (.env in server/)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your-secret-key"
JWT_REFRESH_SECRET="your-refresh-secret"
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
OPENAI_API_KEY="your-openai-key"
```

### Frontend (.env in client/)
```env
VITE_API_URL=http://localhost:3000
```

## 📦 Available Scripts

### Backend
- `npm run start:dev` - Start development server
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:seed` - Seed database

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions on deploying to production.

**Quick deployment options:**
- **Backend**: Render.com, Railway.app, or Heroku
- **Frontend**: Vercel or Netlify
- **Database**: Render PostgreSQL or Railway PostgreSQL

## 🔐 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection with Helmet
- Rate limiting with NestJS Throttler
- Environment variable validation

## 📚 Documentation

- [Setup Guide](./SETUP_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- [Architecture Diagram](./architecture_diagram.md)
- [API Documentation](http://localhost:3000/api) (when backend is running)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

Code-n-Click Technologies

---

**Need help?** Check the documentation or open an issue.
