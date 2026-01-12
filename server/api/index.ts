import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { setupApp } from '../src/app.setup';
import express from 'express';

const server = express();
let cachedApp: any;

export const createServer = async (expressInstance: any) => {
    if (!cachedApp) {
        try {
            const app = await NestFactory.create(
                AppModule,
                new ExpressAdapter(expressInstance),
            );
            setupApp(app);
            await app.init();
            cachedApp = app;
        } catch (error) {
            console.error('NestJS initialization failed:', error);
            throw error;
        }
    }
    return cachedApp;
};

// Vercel serverless function entry point
export default async (req: any, res: any) => {
    try {
        await createServer(server);
        server(req, res);
    } catch (err: any) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error during initialization',
            error: err.message,
            stack: err.stack,
        });
    }
};
