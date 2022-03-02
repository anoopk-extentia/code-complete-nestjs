import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';
import { NameInsertedListener } from './listeners/name-inserted.listener';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { HttpModule } from '@nestjs/axios';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { PostGraphileModule } from 'postgraphile-nest';

@Module({
  imports: [
    PostGraphileModule.forRoot({
      pgConfig: 'postgres://postgres:postgres@localhost/sessions',
    }),
    NamesModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    HttpModule,
    TerminusModule,
    UsersModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
