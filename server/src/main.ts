import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { setupApp } from './app.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

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
