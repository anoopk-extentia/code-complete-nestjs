import { Test, TestingModule } from '@nestjs/testing';
import { Item } from './item.model';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items } from './items.collection';

describe('ItemsController', () => {
  let controller: ItemsController;
  let service: ItemsService;
  let items: Items;
  let item: Item;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService, Items],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
    service = module.get<ItemsService>(ItemsService);
    items = module.get<Items>(Items);
    items.add('1', 'bikes');
  });

  describe('root', () => {
    it('should return a list of names', () => {
      const result = [];
      jest.spyOn(service, 'list').mockImplementation(() => result);
      expect(controller.listItems()).toBe(result);
    });
  });
  describe('get', () => {
    it('this returns an Item', () => {
      jest.spyOn(service, 'get').mockImplementation(() => item);
      expect(controller.getItem('1')).toBe(item);
    });
  });
  describe('get', () => {
    it('or exception', () => {
      jest.spyOn(service, 'get').mockImplementation(() => item);
      expect(controller.getItem('1')).toBe(item);
    });
  });
  describe('addItem', () => {
    it('Add an item', () => {
      const itemid = '1';
      jest.spyOn(service, 'add').mockImplementation(() => itemid);
      expect(controller.addItem('1')).toBe(itemid);
    });
  });
});
