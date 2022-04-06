import fs from 'fs';
import path from 'path';
import { Injectable, Inject, Logger } from '@nestjs/common';
import * as nlp from 'node-nlp';
import { NormalizerEn } from '@nlpjs/lang-en';
import { EntityStructure } from './nlp-entity-structure';
import { EntityData } from './nlp-entity-data';
import { NlpGraphqlBuilderService } from './nlp-graphql-builder.service';

@Injectable()
export class NlpService {
  private readonly logger = new Logger(NlpService.name);
  private static readonly MODEL_FILENAME = 'nlp-trained-data.json';
  private static readonly MODEL_PATH = path.join(
    __dirname,
    '../../',
    NlpService.MODEL_FILENAME,
  );
  private readonly manager;

  constructor(
    @Inject(NlpGraphqlBuilderService)
    private readonly builder: NlpGraphqlBuilderService,
  ) {
    this.manager = new nlp.NlpManager({
      languages: ['en'],
      threshold: 0.8,
      autoSave: false,
      modelFileName: NlpService.MODEL_FILENAME,
    });
  }

  async init(): Promise<void> {
    await this.buildTrainingData(this.manager);
  }

  /**
   *
   * This method is used to parse the text and return equivalent graphql query
   * @param {string} searchQuery - The text to be parsed
   * @return {*}  {Promise<string>} - Returns graphql query in a string
   * @memberof NlpService
   */
  async parse(searchQuery: string): Promise<string> {
    const normalizer = new NormalizerEn();
    const query = normalizer.normalize(searchQuery);
    const result = await this.manager.extractEntities(query);
    return this.builder.build(query, result);
  }

  private async buildTrainingData(manager: any) {
    if (fs.existsSync(NlpService.MODEL_PATH)) {
      // TODO: Move env to config module
      if (process.env.NLP_REBUILD_TRAINING_DATA !== 'true') {
        this.logger.log('Reading NLP trained data from json file.');
        const data = fs.readFileSync(NlpService.MODEL_PATH, 'utf8');
        manager.import(data);
        return;
      }
    }

    this.logger.log('Building NLP training data and saving into json file.');
    const topLevelEntities = Object.keys(EntityStructure);
    // Train top level entities first
    for (const entity of topLevelEntities) {
      const entityStructure = EntityStructure[entity];
      const synonyms = entityStructure.synonyms ?? [];
      manager.addNamedEntityText(entity, entity, ['en'], synonyms);

      const entityData: string[] = EntityData[`${entity}`];
      for (const data of entityData) {
        manager.addNamedEntityText(entity, data, ['en']);
      }
    }

    // Get all entity filters
    let filters: any = {};
    for (const entity of topLevelEntities) {
      const entityStructure = EntityStructure[entity];
      filters = { ...filters, ...entityStructure.filters };
    }

    // Train filters of all entities
    for (const filter of Object.keys(filters)) {
      const filterStructure = filters[filter];
      const synonyms = filterStructure.synonyms ?? [];
      manager.addNamedEntityText(filter, filter, ['en'], synonyms);

      const entityData: string[] = EntityData[`${filter}`] ?? [];
      for (const data of entityData) {
        manager.addNamedEntityText(filter, data, ['en']);
      }
    }

    await manager.train();
    fs.writeFileSync(NlpService.MODEL_PATH, manager.export(false));
  }
}
