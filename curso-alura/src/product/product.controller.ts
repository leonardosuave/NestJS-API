/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { createProductDTO } from "./dto/create.dto";
import { ProductReposity } from "./product.reposity";

@Controller('/products')
export class ProductController {

    constructor(private productReposity: ProductReposity){}

    @Post()
    async save(@Body() productData: createProductDTO) {
        this.productReposity.save(productData);
        return { status: 'success', product: productData.name};           
    };

    @Get()
    async getProduct() {
        return this.productReposity.getProducts();
    };
};