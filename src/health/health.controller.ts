import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
  MemoryHealthIndicator
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private memHealth: MemoryHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
  @Get('/memory')
  @HealthCheck()
  checkMem() {
    return this.health.check([
      () => this.memHealth.checkHeap("memory", 150*1024*1024),
    ]);
  }
  @Get('/db')
  @HealthCheck()
  checkDb() {
    return this.health.check([
      () => this.db.pingCheck('database'),
    ]);
  }
}
