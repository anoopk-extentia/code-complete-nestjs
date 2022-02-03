import { Injectable } from '@nestjs/common';
import { Name } from './entities/name.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private namesRepository: Repository<Name>,
  ) {}

  async list(): Promise<Name[]> {
    return await this.namesRepository.find();
  }

  async get(id: string): Promise<Name> {
    return await this.namesRepository.findOne(id);
  }

  async add(name: string): Promise<string> {
    return name;
  }
}
