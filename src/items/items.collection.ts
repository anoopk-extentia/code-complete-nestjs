import { Item } from './item.model';

export class Items {
  private items: Item[] = [];
  list() {
    return [...this.items];
  }

  get(id: string): Item {
    const item = this.items.find((it) => it.id == id);
    return { ...item };
  }

  getByName(name: string): Item {
    const item = this.items.find((it) => it.name == name);
    return { ...item };
  }

  add(id: string, name: string) {
    this.items.push(new Item(id, name));
    return id;
  }
}
