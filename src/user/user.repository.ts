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
};