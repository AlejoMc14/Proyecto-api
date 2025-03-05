// products.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products-module.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) {}

    @Get()
    getAllProducts() {
        return this.productsService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsService.findOneById(+id);
    }
    
    // Implementar otros endpoints según sea necesario
}
