import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  INestApplication,
  VersioningType,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import helmet from 'helmet';
import { ValidationException } from './exceptions/validation.exception';
import { ValidationFilter } from './exceptions/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '0' });
  app.useGlobalFilters(new HttpExceptionFilter(), new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(
          (err) =>
            `${err.property} has wrong value ${
              err.value
            }. Constrained by:${Object.values(err.constraints!).join(', ')}`,
        );
        return new ValidationException(messages);
      },
    }),
  );
  await attachOpenAPIDocumentation(app);
  await app.listen(process.env.PORT ? process.env.PORT : 3000);
}

async function attachOpenAPIDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Code Complete API')
    .setDescription('How to be code complete on nodejs using nestjs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
