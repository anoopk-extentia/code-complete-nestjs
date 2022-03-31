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
import { NlpModule } from './nlp/nlp.module';

@Module({
  imports: [
    NamesModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    PostGraphileModule.forRoot({
      pgConfig: process.env.GRAPHDB_DATABASE_URL || '',
    }),
    HttpModule,
    TerminusModule,
    UsersModule,
    NlpModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
