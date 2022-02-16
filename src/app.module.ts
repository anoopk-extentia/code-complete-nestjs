// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';
import { NameInsertedListener } from './listeners/name-inserted.listener';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { Name } from './names/entities/name.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    NamesModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env.POSTGRES_HOST,
      port: parseInt(
        process.env.POSTGRES_PORT ? process.env.POSTGRES_PORT : '3000',
      ),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Name, User],
      //ssl: true,
    }),
    HttpModule,
    TerminusModule,
    UsersModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
