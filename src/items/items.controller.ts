import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}
  @Get()
  listItems() {
    return this.itemsService.list();
  }

  @Get(':id')
  getItem(@Param('id') id: string) {
    return this.itemsService.get(id);
  }

  @Post()
  addItem(@Body('name') name: string): string {
    return this.itemsService.add(name);
  }
}
