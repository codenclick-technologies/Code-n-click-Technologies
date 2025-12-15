import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Global prefix
  app.setGlobalPrefix(configService.get('API_PREFIX') || 'api');

  // Enhanced Security with Stricter CSP
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"], // Needed for some CSS frameworks
          imgSrc: ["'self'", 'data:', 'https:', 'blob:'], // Allow external images
          fontSrc: ["'self'", 'data:'],
          connectSrc: ["'self'"], // API connections
          frameSrc: ["'none'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      crossOriginEmbedderPolicy: false, // Required for Cloudinary
      hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true,
      },
      referrerPolicy: {
        policy: 'strict-origin-when-cross-origin',
      },
    }),
  );

  // CORS - Fixed configuration for proper preflight handling
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://codenclick.in',
      'https://www.codenclick.in',
      /\.vercel\.app$/, // Allow all Vercel subdomains (Frontend)
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Authorization'],
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Company Management System API')
    .setDescription(
      'Complete backend API for company management with authentication, employee management, career portal, task management, and notifications',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication', 'User authentication and authorization')
    .addTag('Users', 'User management')
    .addTag('Employees', 'Employee profile management')
    .addTag('Jobs', 'Job postings and career portal')
    .addTag('Applications', 'Job applications and resume management')
    .addTag('Tasks', 'Task assignment and tracking')
    .addTag('Notifications', 'Website notifications and banners')
    .addTag('Dashboard', 'Analytics and dashboard data')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Company Management API Docs',
    customCss: '.swagger-ui .topbar { display: none }',
  });

  const port = configService.get('PORT') || 3000;
  await app.listen(port);

  console.log(`
  ╔══════════════════════════════════════════════════════════════╗
  ║                                                              ║
  ║   🚀 Company Management System API                          ║
  ║                                                              ║
  ║   Server running on: http://localhost:${port}                    ║
  ║   API Endpoint: http://localhost:${port}/api                     ║
  ║   Swagger Docs: http://localhost:${port}/api/docs               ║
  ║                                                              ║
  ║   Environment: ${configService.get('NODE_ENV') || 'development'}                                    ║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
  `);
}

bootstrap();
