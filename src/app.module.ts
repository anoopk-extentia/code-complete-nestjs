// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';
import { NameInsertedListener } from './listeners/name-inserted.listener';
import {ConfigModule} from '@nestjs/config' 

@Module({
  imports: [NamesModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, NameInsertedListener],
})
export class AppModule {}
