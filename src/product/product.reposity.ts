/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

/* eslint-disable prettier/prettier */
@Injectable()
export class ProductReposity {
    private products = [];
    
    async save(product) {
        this.products.push(product);
    };

    async getProducts() {
        return this.products;
    };
};