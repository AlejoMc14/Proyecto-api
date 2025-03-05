// orders.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders-module.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService
    ) {}

    @Get()
    getAllProducts() {
        return this.ordersService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.ordersService.findOneById(+id);
    }
    
    // Implementar otros endpoints según sea necesario
}

