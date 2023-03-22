/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common/decorators";
import { ProductController } from "./product.controller";
import { ProductReposity } from "./product.reposity";

@Module({
    controllers: [ProductController],
    providers: [ProductReposity]
})

export class productModule {}