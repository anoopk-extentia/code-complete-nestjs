import { Test, TestingModule } from '@nestjs/testing';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';

describe('NamesController', () => {
  let controller: NamesController;

  const mockNameSerice = {
    list: jest.fn().mockResolvedValue([{ text: 'bikes' }, { text: 'Test' }]),
    get: jest.fn().mockImplementation((id) => {
      return {
        id: id,
        text: 'Test',
      };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NamesController],
      providers: [
        {
          provide: NamesService,
          useValue: mockNameSerice,
        },
      ],
    }).compile();

    controller = module.get<NamesController>(NamesController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('should return a list of names', async () => {
      const results = [{ text: 'bikes' }, { text: 'Test' }];
      await expect(controller.listNames()).resolves.toEqual(results);
    });
  });

  describe('get', () => {
    it('or exception', async () => {
      const dto = { text: 'Test' };
      expect(controller.getName('1')).toEqual({
        id: '1',
        ...dto,
      });
    });
  });
});
