import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { setupApp } from '../src/app.setup';
import express from 'express';

const server = express();

export const createServer = async (expressInstance: any) => {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    );

    setupApp(app);

    await app.init();
    return app;
};

// Vercel serverless function entry point
export default async (req: any, res: any) => {
    await createServer(server);
    server(req, res);
};
