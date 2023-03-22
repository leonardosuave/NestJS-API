/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "../user/user.repository";
import { createUserDTO } from "./dto/create.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'
import { UserListDTO } from "./dto/userList.dto";
import { UpdateUserDTO } from "./dto/update.dto";
import { Delete } from "@nestjs/common/decorators";

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Post()
    //@Body() utilizado para pegar os dados enviados no corpo da requisição.
    async create(@Body() userData: createUserDTO) { 
        const userEntity = new UserEntity();
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.name = userData.name;
        userEntity.id = uuid();

        this.userRepository.save(userEntity);
        return { id: userEntity.id };
    };

    @Get()
    async getUsers() {
        const userSaved = await this.userRepository.getUsers();
        const userList = userSaved.map(
            user => new UserListDTO(
                user.id,
                user.name
            )
        );

        return userList;
    };

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() datasToUpdate: UpdateUserDTO) {
        await this.userRepository.update(id, datasToUpdate);
        return; 
    };

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        await this.userRepository.delete(id);
        return;
    };
};
