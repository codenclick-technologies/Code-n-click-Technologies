import 'reflect-metadata'; // Required for NestJS
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../server/src/app.module';
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
        origin: true, // Allow all origins dynamically
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
    // 1. Simple Health Check (Bypasses NestJS)
    if (req.url === '/api/health_check_plain' || req.query.health === 'true') {
        return res.status(200).json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            message: 'Vercel Function is alive. NestJS not loaded for this request.'
        });
    }

    // 2. Load NestJS
    try {
        if (!(server as any)._isInit) {
            await createNestServer(server);
            (server as any)._isInit = true;
        }
        server(req, res);
    } catch (error: any) {
        console.error('Serverless Function Error:', error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
            stack: error.stack,
        });
    }
};
