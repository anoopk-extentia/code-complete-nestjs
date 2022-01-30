import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { Names } from './names.collection';
import { Item } from '../items/item.model';

describe('ItemsService', () => {
  let service: ItemsService;
  let items: Names;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService, Names],
    }).compile();
    items = module.get<Names>(Names);
    items.add('1', 'bikes');
    service = module.get<ItemsService>(ItemsService);
  });

  describe('add', () => {
    it('Should return string id', () => {
      expect(service.add('trucks')).toContain('.');
    });
  });
  describe('get', () => {
    it('Should return item', () => {
      expect(service.get('1')).toEqual(new Item('1', 'bikes'));
    });
  });
  describe('list', () => {
    it('Should have 1 item', () => {
      expect(service.list().length).toBe(1);
    });
  });
});
