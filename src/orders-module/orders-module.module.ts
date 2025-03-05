import { Module } from '@nestjs/common';
import { OrdersController } from './orders-module.controller';
import { OrdersService } from './orders-module.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModuleModule {}
