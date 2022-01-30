// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { NamesModule } from './names/names.module';

@Module({
  imports: [ItemsModule, NamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
