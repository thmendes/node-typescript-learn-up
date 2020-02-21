import AbstractProduct from "src/services/AbstractProductService";

export default interface ProductAbstractFactory {
    createProductService(typeProduct: string): AbstractProduct;
}