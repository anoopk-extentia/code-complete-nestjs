// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';
import { NameInsertedListener } from './listeners/name-inserted.listener';

@Module({
  imports: [NamesModule],
  controllers: [AppController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
