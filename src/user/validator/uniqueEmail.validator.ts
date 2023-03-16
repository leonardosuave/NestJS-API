/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable() //2 - transforma a class abaixo em um provider 
@ValidatorConstraint({ async: true }) // 3 - configura a class para validação assincrona
//1 - classe de validação que implementa a interface ValidatorConstraintInterface (deve importar no providers do user.module)
export class UniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return await this.userRepository.getExistEmail(value);  
    };
};

//Decorator -> Uma funcao que retorna uma outra funcao que executa algo (é utilizado como DTO -> @uniqueEmail)
export const uniqueEmail = (validatorOption: ValidationOptions) => {
    return (object: Object, property: string) => {

        //registerDecorator vem do class-validator
        registerDecorator({
            target: object.constructor, //construtor do objeto -> createUserDTO (refere-se a class de DTO que o decorator esta sendo utilizado)
            propertyName: property,     //nome da propriedade que o decorator será aplicado -> email
            options: validatorOption,   //opções de validações
            constraints: [],            //outras regras de validações
            validator: UniqueEmailValidator //referencia para a class que sera validado
        })
    };
};