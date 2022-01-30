import { Module } from '@nestjs/common';
import { NamesService } from './names.service';
import { NamesController } from './names.controller';

@Module({
  controllers: [NamesController],
  providers: [NamesService]
})
export class NamesModule {}
