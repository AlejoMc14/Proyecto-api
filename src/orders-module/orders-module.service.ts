import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class OrdersService {
    private orders = [];

    constructor() {
        try {
            const filePath = path.join(process.cwd(), 'src/Api/orders.json'); 
            console.log('Leyendo JSON', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf8');

            if (!jsonData) {
                throw new Error('JSON está vacío');
            }

            this.orders = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error al cargar los pedidos', error);
            this.orders = [];
        }
    }

    findAll() {
        return this.orders;
    }

    findOneById(id: number) {
        return this.orders.find(order => Number(order.id) === Number(id));
    }
}

