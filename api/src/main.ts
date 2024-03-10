import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.json({ limit: '50gb' }));
  await app.listen(4000);
}
bootstrap();
