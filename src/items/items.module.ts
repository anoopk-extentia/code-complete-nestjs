import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items } from './items.collection';

@Module({
  imports: [ItemsModule],
  controllers: [ItemsController],
  providers: [ItemsService, Items],
})
export class ItemsModule {}
