import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '0' });
  app.useGlobalFilters(new HttpExceptionFilter());
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
