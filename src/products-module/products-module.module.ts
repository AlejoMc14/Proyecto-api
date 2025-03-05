import { Module } from '@nestjs/common';
import { ProductsController } from './products-module.controller';
import { ProductsService } from './products-module.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModuleModule {}
