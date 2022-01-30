import { Module } from '@nestjs/common';
import { NamesService } from './names.service';
import { NamesController } from './names.controller';
import { Names } from '../names/names.collection';
import { EventEmitterModule } from '@nestjs/event-emitter';


@Module({
  imports: [NamesModule, EventEmitterModule.forRoot()],
  controllers: [NamesController],
  providers: [NamesService, Names]
})
export class NamesModule {}
