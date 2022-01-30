import { Injectable } from '@nestjs/common';
import { Names } from './names.collection'
import { Name } from "./entities/name.entity"
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class NamesService {
  constructor(private names: Names, private eventEmitter: EventEmitter2) {}

  list() {
    return this.names.list();
  }

  get(id: string): Name {
    const name = this.names.get(id);
    if (!name) throw new NotFoundException('Name not found');
    return name;
  }

  add(name: string): string {
    this.eventEmitter.emit('name.inserted', name);

    const item = this.names.getByName(name);
    if (item.id) 
      return item.id;
    
    const id = Math.random().toString();
    this.names.add(id, name);
    return id;
  }
}
