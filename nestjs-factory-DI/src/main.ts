import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { header } from './common/middleware/header.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(header);
  await app.listen(3000);
}
bootstrap();
