import { Controller, Get, Post, Body, Param, HttpException, HttpStatus, Version } from '@nestjs/common';
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

  @Version('1')
  @Get(':id')
  getNameV1(@Param('id') id: string) {
    throw new HttpException('Not implemented', HttpStatus.NOT_IMPLEMENTED);
  }

  @Get(':id')
  getName(@Param('id') id: string) {
    return this.namesService.get(id);  
    /*name.then(
      value => { 
        if(value == undefined) {
          throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
      }, 
      error => { 
        throw new HttpException('Forbidden', HttpStatus.SERVICE_UNAVAILABLE);
      }
    );  
    return name;*/
  }

  @Post()
  addName(@Body() body: CreateNameDto): Promise<Name>  {
    return this.namesService.add(body);
  }
}
