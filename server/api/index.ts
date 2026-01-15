import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { setupApp } from '../src/app.setup';
import express, { json, urlencoded } from 'express';

const server = express();

// Configure body parsers for handling login/auth payloads
server.use(json({ limit: '50mb' }));
server.use(urlencoded({ limit: '50mb', extended: true }));

let cachedApp: any;

export const createServer = async (expressInstance: any) => {
    if (!cachedApp) {
        try {
            const app = await NestFactory.create(
                AppModule,
                new ExpressAdapter(expressInstance),
                {
                    bodyParser: false, // We're using Express body parsers
                }
            );
            setupApp(app);
            await app.init();
            cachedApp = app;
            console.log('✅ NestJS app initialized successfully on Vercel');
        } catch (error) {
            console.error('❌ NestJS initialization failed:', error);
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
        console.error('❌ Serverless function error:', err);
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error during initialization',
            error: err.message,
            stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
        });
    }
};
