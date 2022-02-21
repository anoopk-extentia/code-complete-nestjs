import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RateLimiterGuard, RateLimit } from 'nestjs-rate-limiter'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(RateLimiterGuard)
  @RateLimit({ keyPrefix: 'sign-up', points: 8, duration: 60, errorMessage: 'You can Hello World no more than 8 times per minute' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
