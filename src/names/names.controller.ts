import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NamesService } from './names.service';
import { Name } from './entities/name.entity';
import { CreateNameDto } from './dto/create-name.dto';

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
  addName(@Body() body: CreateNameDto): Promise<Name>  {
    return this.namesService.add(body);
  }
}
