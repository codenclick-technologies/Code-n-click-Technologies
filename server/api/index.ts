import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

declare const require: any;
const express = require('express');
const helmet = require('helmet');

const server = express();

const createNestServer = async (expressInstance: any) => {
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
        origin: [
            'http://localhost:5173',
            'http://localhost:3000',
            'https://codenclick.in',
            'https://www.codenclick.in',
            /\.vercel\.app$/, // Allow all Vercel subdomains
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

    await app.init();
};

export default async (req: any, res: any) => {
    if (!(server as any)._isInit) { // Custom property check to avoid re-init
        await createNestServer(server);
        (server as any)._isInit = true;
    }
    server(req, res);
};
