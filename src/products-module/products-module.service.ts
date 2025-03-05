import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
    private products = [];

    constructor() {
        try {
            const filePath = path.join(process.cwd(), 'src/Api/products.json'); 
            console.log('Leyendo JSON', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf8');

            if (!jsonData) {
                throw new Error('El archivo JSON está vacío');
            }

            this.products = JSON.parse(jsonData);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
            this.products = [];
        }
    }

    findAll() {
        return this.products;
    }

    findOneById(id: number) {
        return this.products.find(product => Number(product.id) === Number(id));
    }
}
