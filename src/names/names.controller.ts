import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Version,
} from '@nestjs/common';
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
    throw new HttpException(
      'Not implemented with ' + id,
      HttpStatus.NOT_IMPLEMENTED,
    );
  }

  @Get(':id')
  getName(@Param('id') id: string) {
    return this.namesService
      .get(id)
      .then((value) => {
        if (value) {
          return value;
        } else {
          throw new HttpException('Data Not Found', HttpStatus.NOT_FOUND);
        }
      })
      .catch(() => {
        throw new HttpException('Data Not Found', HttpStatus.NOT_FOUND);
      });
  }

  @Post()
  addName(@Body() body: CreateNameDto): Promise<Name> {
    return this.namesService.add(body);
  }
}
