import { Module } from '@nestjs/common';
import { UsersController } from './users-module.controller';
import { UsersService } from './users-module.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModuleModule {}
