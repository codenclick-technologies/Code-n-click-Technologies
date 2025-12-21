import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { setupApp } from './app.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  const configService = app.get(ConfigService);

  // Explicitly apply high-limit body parsers BEFORE setupApp or global prefix
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  // Use shared setup
  setupApp(app);

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
