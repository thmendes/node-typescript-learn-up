import AbstractProductService from "./AbstractProductService";

export default class ProductAService implements AbstractProductService{
    testeMetodoPublico() {
        throw new Error("Method not implemented.");
    }

    public buildProduct(document: string): string {
        let additionalInformations  = this.GetAdditionalInformations(document);
        console.log(additionalInformations);
        return "Product A!";
    }

    private GetAdditionalInformations(document: string) : string{ 
        return `getting additional informations by document ${document}!`;
    }   
}