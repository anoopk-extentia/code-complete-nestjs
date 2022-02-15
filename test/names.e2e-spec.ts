import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { NamesModule } from '../src/names/names.module';
import { Name } from '../src/names/entities/name.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { json } from 'stream/consumers';

describe('NamesController (e2e)', () => {
  let app: INestApplication;

  let nameService = { findAll: () => ['test'] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [NamesModule],
    }).overrideProvider(getRepositoryToken(Name))
    .useValue(nameService).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/GET names`, () => {
    return request(app.getHttpServer())
      .get('/names')
      .expect(200)
      .expect({
        data: nameService.findAll(),
      });
  });
});
