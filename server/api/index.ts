import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import express = require('express');

const server = express();

const createNestServer = async (expressInstance: express.Express) => {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    );

    // Global prefix
    // Note: On Vercel, the path usually comes as /api/... so we might not need this if we rely on file routing,
    // but to keep consistent with local dev (localhost:3000/api), let's set it.
    app.setGlobalPrefix('api');

    // Enhanced Security with Stricter CSP
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'"],
                    styleSrc: ["'self'", "'unsafe-inline'"],
                    imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
                    fontSrc: ["'self'", 'data:'],
                    connectSrc: ["'self'"],
                    frameSrc: ["'none'"],
                    objectSrc: ["'none'"],
                    upgradeInsecureRequests: [],
                },
            },
            crossOriginEmbedderPolicy: false,
            hsts: {
                maxAge: 31536000,
                includeSubDomains: true,
                preload: true,
            },
            referrerPolicy: {
                policy: 'strict-origin-when-cross-origin',
            },
        }),
    );

    // CORS - Allow Vercel Frontend
    app.enableCors({
        origin: true, // Reflects the request origin (Allows all if credentials=true is handled by browser checks, effectively)
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

    await app.init();
};

export default async (req: any, res: any) => {
    if (!(server as any)._isInit) { // Custom property check to avoid re-init
        await createNestServer(server);
        (server as any)._isInit = true;
    }
    server(req, res);
};
