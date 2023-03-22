/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private user: UserEntity[] = [];

    async save(user: UserEntity) {
        this.user.push(user);
    };

    async getUsers() {
        return this.user;
    };

    async getExistEmail(email: string) {
        const getExistEmail = this.user.find(
            user => user.email === email
        );
        //undefined to not exist and true to exist email
        return !getExistEmail;
    };

    //Partial referencia a entity referenciada como dados opcionais e não obrigatórios como no método de criar usuário.
    async update(id: string, data: Partial<UserEntity>) {
        const findUser = this.user.find(
            user => user.id === id
        );

        if (!findUser) throw new Error('this user not exist');
        Object.entries(data).forEach(([key, value]) => {
            if (key === id) return;
            findUser[key] = value;
        });

        return findUser;
    };
};