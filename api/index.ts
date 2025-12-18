import 'reflect-metadata';
// Remove static imports to prevent startup crashes
// import { NestFactory } from '@nestjs/core';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { AppModule } from '../server/src/app.module';
// import { ValidationPipe } from '@nestjs/common';

declare const require: any;
const server = require('express')(); // Initialize express immediately for health check

// Singleton to hold the initialized app Promise
let appPromise: Promise<any> | null = null;

const loadNestApp = async (expressInstance: any) => {
    // Dynamic Imports inside try/catch
    const { NestFactory } = await import('@nestjs/core');
    const { ExpressAdapter } = await import('@nestjs/platform-express');
    const { AppModule } = await import('../server/src/app.module');
    const { ValidationPipe } = await import('@nestjs/common');
    const helmet = await import('helmet');

    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    );

    app.setGlobalPrefix('api');

    // @ts-ignore
    app.use(helmet.default({
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
    }));

    app.enableCors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        exposedHeaders: ['Authorization'],
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    );

    await app.init();
    return app;
};

export default async (req: any, res: any) => {
    // 1. Robust Health Check
    if (req.url === '/api/health_check_plain' || req.query.health === 'true') {
        return res.status(200).json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            message: 'Function Alive. Lazy loading implementation.'
        });
    }

    // 2. Lazy Load NestJS with Error Capture
    try {
        if (!appPromise) {
            appPromise = loadNestApp(server);
        }
        await appPromise;
        server(req, res);
    } catch (error: any) {
        console.error('CRITICAL STARTUP ERROR:', error);
        // Reset promise so we can retry (optional)
        appPromise = null;

        res.status(500).json({
            error_type: 'StartupCrash',
            message: `Failed to load NestJS API: ${error.message}`,
            details: error.message,
            stack: error.stack,
            import_hint: 'Verify all dependencies in root package.json'
        });
    }
};
