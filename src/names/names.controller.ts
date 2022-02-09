import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) {}
  @Get()
  listNames() {
    return this.namesService.list();
  }

  @Get(':id')
  getName(@Param('id') id: string) {
    return this.namesService.get(id);
  }

  @Post()
  addName(@Body('name') name: string) {
    return this.namesService.create(name);
  }
}
