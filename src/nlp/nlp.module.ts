import { Module } from '@nestjs/common';
import { NlpService } from './nlp.service';
import { NlpController } from './nlp.controller';
import { NlpGraphqlBuilderService } from './nlp-graphql-builder.service';

@Module({
  controllers: [NlpController],
  providers: [NlpService, NlpGraphqlBuilderService],
  exports: [NlpService],
})
export class NlpModule {}
