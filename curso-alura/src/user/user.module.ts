/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UniqueEmailValidator } from "./validator/uniqueEmail.validator";

@Module({
    controllers: [UserController],

    //no providers do module é importado todas as classes que o nest utiliza para injeção de dependencia, como ex regras de validações
    // 3 - adiciona o provider UniqueEmailValidator para utilizar a validação criada
    providers: [UserRepository, UniqueEmailValidator]
})
export class UserModule {}