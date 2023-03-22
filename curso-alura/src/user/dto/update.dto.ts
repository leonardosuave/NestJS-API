/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { uniqueEmail } from "../validator/uniqueEmail.validator";

export class UpdateUserDTO {
    //Os decorator abaixo funcionam como validadores ex IsNotEmpty === !req.body.name
    //Os decorator aceitam mensagens de erro modificadas, conforme feito abaixo

    @IsNotEmpty({ message: 'The name can not be empty' })
    @IsOptional() //Indica que o campo é opcional
    name: string;

    @IsEmail(undefined, { message: 'E-mail invalid' })
    @uniqueEmail({ message: 'this email already exist' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'The min characters is 6' })
    @IsOptional()
    password: string;
};