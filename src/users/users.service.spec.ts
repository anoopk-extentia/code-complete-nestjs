import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
const usersArray = [
  {name:'Test',id:1},{name:'Test1',id:2}
];
describe('UsersService', () => {
  let service: UsersService;
  const mockUserRepository = {
    create: jest.fn().mockImplementation((dto)=>dto),
    save: jest.fn().mockImplementation(user=>Promise.resolve({id:1,...user})),
    find: jest.fn().mockResolvedValue(usersArray),
    findOneOrFail: jest.fn().mockResolvedValue({name:'Test',id:expect.any(Number)}),
    findbyid:jest.fn().mockImplementation(id=>Promise.resolve({id:expect.any(Number),name:'Test'})),
    remove: jest.fn().mockImplementation(user=>Promise.resolve({id:1,...user})),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Create Users', async () => {
    const dto = { name: 'Test' }
    expect(await service.create(dto)).toEqual({
      id:expect.any(Number),...dto
    });
  });
  it('list users', async () => {
    expect(await service.findall('Test')).toEqual(usersArray);
  });
  it('Get user by id', async () => {
    expect(await service.findbyid(1)).toEqual({
      id:expect.any(Number),name:'Test'
    });
  });
  it('Delete user by id', async () => {
    expect(await service.deleteuser(1)).toEqual({
      id:expect.any(Number),name:'Test'
    });
  });
  it('Update user by id', async () => {
    expect(await service.update(1,{name:'Test'})).toEqual({
      id:expect.any(Number),name:'Test'
    });
  });
 
 
});
