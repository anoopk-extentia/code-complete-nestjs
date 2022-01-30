import { Test, TestingModule } from '@nestjs/testing';
import { NamesService } from './names.service';

describe('NamesService', () => {
  let service: NamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NamesService],
    }).compile();

    service = module.get<NamesService>(NamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
