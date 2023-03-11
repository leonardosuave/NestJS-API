/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "../user/user.repository";

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Post()
    //@Body() utilizado para pegar os dados enviados no corpo da requisição.
    async create(@Body() userData) { 
        this.userRepository.save(userData);
        return { status: 'success', name: userData.name };
    };

    @Get()
    async getUsers() {
        return this.userRepository.getUsers()
    };
};
