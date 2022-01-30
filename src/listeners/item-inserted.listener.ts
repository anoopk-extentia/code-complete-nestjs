import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class OrderCreatedListener {
  @OnEvent('item.inserted')
  handleOrderCreatedEvent(event: string) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}