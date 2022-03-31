import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { NlpService } from './nlp.service';

@Controller('nlp')
export class NlpController {
  constructor(private readonly nlpService: NlpService) {}

  @Get()
  parseSearchText(@Query('searchQuery') searchQuery: string) {
    if (!searchQuery) {
      throw new BadRequestException('Search query is required');
    }

    return this.nlpService.parse(searchQuery);
  }
}
