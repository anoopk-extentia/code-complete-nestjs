import { Test, TestingModule } from '@nestjs/testing';
//import { Repository } from 'typeorm';
import { Name } from './entities/name.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NamesService } from './names.service';

const NameArray = [
  { text: 'Test', id: 1 },
  { text: 'Test1', id: 2 },
];

describe('NamesService', () => {
  let service: NamesService;
  //  let repo: Repository<Name>;

  const mockservice = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) => Promise.resolve({ id: 1, ...user })),
    find: jest.fn().mockResolvedValue(NameArray),
    findOne: jest.fn().mockResolvedValue({
      text: 'Saurabh',
      role: 'developer',
      id: expect.any(Number),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NamesService,
        {
          provide: getRepositoryToken(Name),
          useValue: mockservice,
        },
      ],
    }).compile();
    service = module.get<NamesService>(NamesService);
    //   repo = module.get<Repository<Name>>(getRepositoryToken(Name));
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });
  it('Create Name', async () => {
    const dt = { text: 'Saurabh', role: 'developer' };
    expect(await service.add(dt)).toEqual({
      id: expect.any(Number),
      ...dt,
    });
  });
  it('list Names', async () => {
    expect(await service.list()).toEqual(NameArray);
  });
  it('Get Names', async () => {
    const dt = { text: 'Saurabh', role: 'developer' };
    expect(await service.get('1')).toEqual({
      id: expect.any(Number),
      ...dt,
    });
  });
});
