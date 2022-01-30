import { Test, TestingModule } from '@nestjs/testing';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';

describe('NamesController', () => {
  let controller: NamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NamesController],
      providers: [NamesService],
    }).compile();

    controller = module.get<NamesController>(NamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
