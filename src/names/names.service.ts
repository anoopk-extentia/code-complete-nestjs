import { Injectable } from '@nestjs/common';
import { Name } from './entities/name.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private namesRepository: Repository<Name>,
  ) {}

  list(): Promise<Name[]> {
    return this.namesRepository.find();
  }

  get(id: string): Promise<Name|undefined> {
    return this.namesRepository.findOne(id);
  }

  add(text: string): Promise<Name> {
    const name = new Name();
    name.text = text;
    return this.namesRepository.save(name);
  }
}
