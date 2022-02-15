import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  NotFoundException,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiTags('Users')
  @ApiQuery({ name: 'name', required: false })
  @ApiOkResponse({ type: User, isArray: true })
  getUsers(@Query('name') name: string): Promise<User[]> {
    return this.usersService.findall(name);
  }

  @Get(':id')
  @ApiTags('Get Users')
  @ApiOkResponse({ type: User, description: 'Get user details' })
  @ApiNotFoundResponse()
  getUsersbyId(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = this.usersService.findbyid(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  @Post()
  @ApiTags('Post Users')
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  createUsers(@Body() body: CreateUsersDto): Promise<User> {
    return this.usersService.create(body);
  }
  @Put(':id')
  @ApiTags('Update Users')
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  updateUsers(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsersDto,
  ): Promise<User> {
    return this.usersService.update(id, body);
  }
  @Delete(':id')
  @ApiTags('Delete Users')
  @ApiCreatedResponse({ type: User })
  deleteUsers(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.deleteuser(id);
  }
}
