import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NamesService } from './names.service';
import { CreateNameDto } from './dto/create-name.dto';
import { UpdateNameDto } from './dto/update-name.dto';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiParam, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('The Names API')
@Controller('names')
export class NamesController {
  constructor(private readonly namesService: NamesService) {}

  @Post()
  @ApiOperation({summary: 'Register a name'})
  @ApiBody({description: "Name to submit"})
  @ApiResponse({ status: 200, description: 'Handled'})
  @ApiResponse({ status: 504, description: 'Already registered'})
  create(@Body() createNameDto: CreateNameDto) {
    return this.namesService.create(createNameDto);
  }

  @Get()
  findAll() {
    return this.namesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.namesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNameDto: UpdateNameDto) {
    return this.namesService.update(+id, updateNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.namesService.remove(+id);
  }
}
