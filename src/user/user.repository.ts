/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private user = [];

    async save(user) {
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
};