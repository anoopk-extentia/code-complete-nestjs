import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findall(name: string): Promise<User[]> {
    if (name) {
      return this.usersRepository.find({
        where: [{ name: name }],
      });
    } else {
      return this.usersRepository.find();
    }
  }

  async findbyid(userID: number): Promise<User> {
    try {
      const user = this.usersRepository.findOneOrFail(userID);
      return user;
    } catch (err) {
      throw err;
    }
  }

  create(body: CreateUsersDto): Promise<User> {
    const newUsers = new User();
    newUsers.name = body.name;
    return this.usersRepository.save(newUsers);
  }

  async update(id: number, body: UpdateUsersDto): Promise<User> {
    const user = await this.findbyid(id);
    user.name = body.name || '';
    return this.usersRepository.save(user);
  }
  async deleteuser(id: number): Promise<User> {
    const user = await this.findbyid(id);
    return this.usersRepository.remove(user);
  }
}
