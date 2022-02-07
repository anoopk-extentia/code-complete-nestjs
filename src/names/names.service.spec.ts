import { Test, TestingModule } from '@nestjs/testing';
import { NamesService } from './names.service';

describe('ItemsService', () => {
  let service: NamesService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NamesService],
    }).compile();
    service = module.get<NamesService>(NamesService);
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
