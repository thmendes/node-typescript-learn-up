import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import ProductFactory from './factory/productFactory';
import ProductAService from './services/ProductAService';
import ProductBService from './services/ProductBService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    ProductFactory,
    ProductAService,
    ProductBService
  ],
})
export class AppModule {}
