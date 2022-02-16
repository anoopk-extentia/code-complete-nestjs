import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUserSerice = {
    create: jest.fn((dto) => {
      return {
        id: expect.any(Number),
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => {
      return {
        id,
        ...dto,
      };
    }),
    findall: jest.fn().mockImplementation(() => {
      return ['Test'];
    }),
    findbyid: jest.fn().mockImplementation((id) => {
      return {
        id: expect.any(Number),
        name: 'Test',
      };
    }),
    deleteuser: jest.fn((id) => {
      return {
        id,
        name: 'Test',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserSerice)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create a user', () => {
    const dto = { name: 'Test' };
    expect(controller.createUsers(dto)).toEqual({
      id: expect.any(Number),
      name: dto.name,
    });
    expect(mockUserSerice.create).toHaveBeenCalledWith(dto);
  });

  it('should update a user', () => {
    const dto = { name: 'Test' };
    expect(controller.updateUsers(1, dto)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockUserSerice.update).toHaveBeenCalled();
  });
  it('Should get the user by id', () => {
    const dto = { name: 'Test' };
    expect(controller.getUsersbyId(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockUserSerice.findbyid).toHaveBeenCalled();
  });
  it('Should delete user by id', () => {
    const dto = { name: 'Test' };
    expect(controller.deleteUsers(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockUserSerice.deleteuser).toHaveBeenCalled();
  });
  it('List a user', () => {
    const result = ['Test'];
    const str = 'Test';
    expect(controller.getUsers(str)).toEqual(result);
    expect(mockUserSerice.findall).toHaveBeenCalled();
  });
});
