import { Test, TestingModule } from '@nestjs/testing';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';

describe('NamesController', () => {
  let controller: NamesController;
  let service: NamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NamesController],
      providers: [NamesService],
    }).compile();

    controller = module.get<NamesController>(NamesController);
    service = module.get<NamesService>(NamesService);
  });

  describe('root', () => {
    it('should return a list of names', () => {
      const result = [];
      jest.spyOn(service, 'list').mockImplementation(() => result);
      expect(controller.listNames()).toBe(result);
    });
  });
  describe('get', () => {
    it('this returns an Item', () => {
      jest.spyOn(service, 'get').mockImplementation(() => name);
      expect(controller.getName('1')).toBe(item);
    });
  });
  describe('get', () => {
    it('or exception', () => {
      jest.spyOn(service, 'get').mockImplementation(() => item);
      expect(controller.getName('1')).toBe(item);
    });
  });
  describe('addItem', () => {
    it('Add an item', () => {
      const itemid = '1';
      jest.spyOn(service, 'add').mockImplementation(() => itemid);
      expect(controller.addName('1')).toBe(itemid);
    });
  });
});
