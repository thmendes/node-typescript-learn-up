import { IsNumber } from "class-validator";

export class Id{
    @IsNumber(undefined, {message: "Identificador deve ser um número!"})
    id: number;
}