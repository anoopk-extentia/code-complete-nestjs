import { Injectable, NotFoundException } from '@nestjs/common';
import { Items } from './items.collection';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  constructor(private items: Items) {}

  list() {
    return this.items.list();
  }

  get(id: string): Item {
    const item = this.items.get(id);
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  add(name: string) {
    const item = this.items.getByName(name);
    if (item.id) return item;
    const id = Math.random().toString();
    this.items.add(id, name);
    return id;
  }
}
