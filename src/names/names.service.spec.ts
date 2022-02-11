import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NamesService } from './names.service';
import { Name } from './entities/name.entity'

describe('NamesService', () => {
  let service: NamesService;
  let repo: Repository<Name>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NamesService,
      {
        provide: getRepositoryToken(Name),
        useValue: {
          save: jest.fn(),
          // as these do not actually use their return values in our sample
          // we just make sure that their resolve is true to not crash
          update: jest.fn().mockResolvedValue(true),
          // as these do not actually use their return values in our sample
          // we just make sure that their resolve is true to not crash
          delete: jest.fn().mockResolvedValue(true),
        },        
      }],
    }).compile();
    service = module.get<NamesService>(NamesService);
    repo = module.get<Repository<Name>>(getRepositoryToken(Name));
  });

  describe('add', () => {
    it('Should return string id', () => {
      expect(service.add('trucks')).toContain('.');
    });
  });
  describe('get', () => {
    it('Should return name', () => {
      expect(service.get('1')).toEqual('bikes');
    });
  });
  describe('list', () => {
    it('Should have 1 item', () => {
      expect(service.list().then).toBe(1);
    });
  });
});
