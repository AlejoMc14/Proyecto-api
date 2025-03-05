import { Module } from '@nestjs/common';
import { CategoriesController } from './categories-module.controller';
import { CategoriesService } from './categories-module.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModuleModule {}
