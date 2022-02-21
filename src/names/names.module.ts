import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamesService } from './names.service';
import { NamesController } from './names.controller';
import { Name } from './entities/name.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RateLimiterModule } from 'nestjs-rate-limiter'


@Module({
  imports: [TypeOrmModule.forFeature([Name]), RateLimiterModule],
  controllers: [NamesController],
  providers: [NamesService, Name, EventEmitterModule],
})
export class NamesModule {}
