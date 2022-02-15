import { Test, TestingModule } from '@nestjs/testing';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';
import { CreateNameDto } from './dto/create-name.dto';

describe('NamesController', () => {
  let controller: NamesController;
  //let service: NamesService;

  const mockNameSerice = {
    list: jest.fn().mockResolvedValue(
       [{text:'bikes'},{text:'Test'}]
    ),
    get: jest.fn().mockImplementation((id)=>{
      return {
        id:expect.any(Number),
        text:'Test'
      }
    }),
    add: jest.fn().mockImplementation((createdto: CreateNameDto) =>
    {
      return {
        id:expect.any(Number),
        ...createdto
      }
    }),
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NamesController],
      providers: [{
        provide: NamesService,
        useValue: mockNameSerice
      }],
    }).compile();

    controller = module.get<NamesController>(NamesController);
   // let service = module.get<NamesService>(NamesService);
    
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return a list of names', async () => {
      const results = [{text:'bikes'},{text:'Test'}];
      await expect(controller.listNames()).resolves.toEqual(results);
    });
  });

  describe('get', () => {
    it('or exception', async() => {
     // jest.spyOn(service, 'get').mockImplementation(() => item);
      //expect(controller.getName('1')).toBe(item);
    const dto = {text:'Test'}
    await expect(controller.getName('1')).toEqual({
        id:1,
        ...dto
      });
    });
  });
  describe('addItem', () => {
    it('Add an item', async () => {
      const text = 'Asim'
      await expect(controller.addName(text)).toBeDefined();
    });
  });
  
});
