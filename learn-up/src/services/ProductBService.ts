import AbstractProductService from "./AbstractProductService";

export default class ProductBService implements AbstractProductService{
    buildProduct(document: string): string {
        this.PrintDocument(document);
        return "Product B!";
    }

    private PrintDocument(document: string){
        console.log("Print document:", document);
    }
}