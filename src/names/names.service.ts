import { Injectable } from '@nestjs/common';
import { Name } from './entities/name.entity';
//import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateNameDto } from './dto/create-name.dto' 

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name) private namesRepository: Repository<Name>,
  ) {}

  list(): Promise<Name[]> {
    return this.namesRepository.find();
  }

  get(id: string): Promise<Name> {
    return this.namesRepository.findOne(id);
  }

  create(text: string): Promise<Name> {
    const name = new Name();
    name.text = text;
    return this.namesRepository.save(name);
  }
}
