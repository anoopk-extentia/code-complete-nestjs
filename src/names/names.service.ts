import { Body, Injectable } from '@nestjs/common';
import { Name } from './entities/name.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNameDto } from './dto/create-name.dto';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private namesRepository: Repository<Name>,
  ) {}

  list(): Promise<Name[]> {
    return this.namesRepository.find();
  }

  get(id: string): Promise<Name | undefined> {
    return this.namesRepository.findOne(id);
  }

  add(@Body() body: CreateNameDto): Promise<Name> {
    const name = new Name();
    name.text = body.text;
    name.role = body.role;
    return this.namesRepository.save(name);
  }
}
