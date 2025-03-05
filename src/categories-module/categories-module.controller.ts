// categories.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './categories-module.service';

@Controller('categories')
export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService
    ) {}

    @Get()
    getAllProducts() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.categoriesService.findOneById(+id);
    }
    
    // Implementar otros endpoints según sea necesario
}

