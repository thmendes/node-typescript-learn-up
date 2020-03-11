import { IsEmail, IsNotEmpty } from 'class-validator';

export class Message{
    @IsEmail()
    to: string;

    @IsNotEmpty()
    message: string;
}