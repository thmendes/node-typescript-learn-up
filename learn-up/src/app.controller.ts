import { Controller, Get, Param } from '@nestjs/common';
import ProductFactory from './factory/productFactory';


@Controller()
export class AppController {
  constructor(
    private readonly productFactory: ProductFactory
  ) {}

  @Get('/product/:productType/document/:document')
  getHello(@Param('productType') productType, @Param('document') document): string {
    let service = this.productFactory.createProductService(productType);
    return service.buildProduct(document);
  }
}
