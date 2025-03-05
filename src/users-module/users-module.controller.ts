// orders.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users-module.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    getAllProducts() {
        return this.usersService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.usersService.findOneById(+id);
    }
    
    // Implementar otros endpoints según sea necesario
}

