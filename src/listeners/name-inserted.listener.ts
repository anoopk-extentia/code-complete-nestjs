import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NameInsertedListener {
  private count = 0;
  @OnEvent('name.inserted')
  handle(event: string) {
    this.count++;
    console.log('Name came in ', this.count, event);
  }
}
