/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class createUserDTO {
    //Os decorator abaixo funcionam como validadores ex IsNotEmpty === !req.body.name
    //Os decorator aceitam mensagens de erro modificadas, conforme feito abaixo

    @IsNotEmpty({ message: 'The name can not be empty' })
    name: string;

    @IsEmail(undefined, { message: 'E-mail invalid' })
    email: string;

    @MinLength(6, { message: 'The min characters is 6' })
    password: string;
};