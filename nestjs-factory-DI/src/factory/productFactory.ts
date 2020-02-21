import { Injectable, BadRequestException } from "@nestjs/common";
import ProductAbstractFactory from "./productAbstractFactory";
import AbstractProductService from "src/services/AbstractProductService";
import ProductAService from "src/services/ProductAService";
import ProductBService from "src/services/ProductBService";

@Injectable()
export default class ProductFactory implements ProductAbstractFactory{
    constructor(
        private readonly productAService: ProductAService,
        private readonly productBService: ProductBService
    ){}

    createProductService(typeProduct: string): AbstractProductService {
        switch (typeProduct) {
            case "A":
                return this.productAService;
                break;
        
            case "B":
                return this.productBService;
                break;
            
            default:
                throw new BadRequestException();
                break;
        }
    }
}