import { Name } from './entities/name.entity';

export class Names {
  private names: Name[] = [];
  list() {
    return [...this.names];
  }

  get(id: string): Name {
    const name = this.names.find((it) => it.id == id);
    return { ...name };
  }

  getByName(name: string): Name {
    const item = this.names.find((it) => it.text == name);
    return { ...item };
  }

  add(id: string, name: string) {
    this.names.push(new Name(id, name));
    return id;
  }
}
