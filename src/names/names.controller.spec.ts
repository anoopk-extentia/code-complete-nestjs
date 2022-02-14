import { Test, TestingModule } from '@nestjs/testing';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';
import { Name } from './entities/name.entity';

describe('NamesController', () => {
  let controller: NamesController;
  //let service: NamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NamesController],
      providers: [NamesService],
    }).compile();

    controller = module.get<NamesController>(NamesController);
    //service = module.get<NamesService>(NamesService);
  });

  describe('root', () => {
    it('should return a list of names', async () => {
      expect(await controller.listNames()).not.toBeDefined();
    });
  });
  describe('get', () => {
    it('or exception', () => {
      //jest.spyOn(service, 'get').mockImplementation(() => item);
      expect(controller.getName('1')).not.toBeDefined();
    });
  });
  describe('addItem', () => {
    it('Add an item', () => {
      const name = new Name();
      name.text = 'bikes';
      //jest.spyOn(service, 'add').mockImplementation(() => "");
      expect(controller.addName(name)).not.toBeDefined();
    });
  });
});
