import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';
import { NameInsertedListener } from './listeners/name-inserted.listener';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { HttpModule } from '@nestjs/axios';
import { PostGraphileModule } from 'postgraphile-nest';

@Module({
  imports: [
    NamesModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    PostGraphileModule.forRoot({
      pgConfig: `postgres://${process.env.TYPEORM_USERNAME}:${process.env.TYPEORM_PASSWORD}@${process.env.TYPEORM_HOST}/${process.env.TYPEORM_DATABASE}`,
    }),
    TypeOrmModule.forRoot(),
    HttpModule,
    TerminusModule,
    UsersModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
