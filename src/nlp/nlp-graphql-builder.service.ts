import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { EntityStructure } from './nlp-entity-structure';
import { sortBy, groupBy } from 'lodash';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

@Injectable()
export class NlpGraphqlBuilderService {
  public async build(
    query: string,
    nlpResult: Record<string, any>,
  ): Promise<string> {
    if (nlpResult?.entities?.length === 0) {
      throw new UnprocessableEntityException('Could not find any entities');
    }

    const entities = this.getFormattedEntities(nlpResult);
    const { rootEntity, otherEntities } =
      this.splitRootEntityAndOthers(entities);

    const filters = this.getFiltersOfRootEntity(rootEntity, otherEntities);
    if (!rootEntity.graphql) {
      throw new UnprocessableEntityException(
        `Could not find graphql query definition for root entity: ${rootEntity.entity}`,
      );
    }

    const __args: any = {};
    if (filters.length > 0) {
      filters.forEach((filter) => {
        if (!filter.graphqlArgName) {
          throw new UnprocessableEntityException(
            `Could not find graphqlArgName for entity: ${filter.entity}`,
          );
        }
        __args[filter.graphqlArgName] = filter.sourceText;
      });
    }

    const queryObject = {
      query: {
        [rootEntity.graphql.queryName]: {
          ...rootEntity.graphql.returnFields,
          __args,
        },
      },
    };
    return jsonToGraphQLQuery(queryObject, { pretty: true });
  }

  private getFormattedEntities(
    nlpResult: Record<string, any>,
  ): FormattedEntity[] {
    return nlpResult.entities.map((e: any) => ({
      start: e.start,
      end: e.end,
      entity: e.entity,
      sourceText: e.sourceText,
    }));
  }

  private splitRootEntityAndOthers(entities: FormattedEntity[]): {
    rootEntity: FormattedEntity;
    otherEntities: FormattedEntity[];
  } {
    const primaryEntities = sortBy(
      Object.keys(EntityStructure).map((key) => {
        return {
          entity: key,
          priority: EntityStructure[key].priority,
          graphql: EntityStructure[key].graphql,
        };
      }),
      ['priority'],
    );

    // Identify the root entity based on priority
    let rootEntityIndex = 0;
    let rootEntityNlpObject: FormattedEntity = entities[0];
    const rootEntity = primaryEntities.find((e, index) => {
      const name = e.entity;
      const primaryEntity = entities.find((entity) => {
        return entity.entity === name;
      });
      if (primaryEntity) {
        rootEntityIndex = index;
        rootEntityNlpObject = { ...primaryEntity, graphql: e.graphql };
        return true;
      }
      return false;
    });

    if (!rootEntity) {
      throw new UnprocessableEntityException('Could not find root entity');
    }

    // Remove other primary entities from entities other than rootEntity
    const otherPrimaryEntities = primaryEntities.slice(rootEntityIndex + 1);
    let rootEntityOccurrence = false;
    const singleRootEntities = entities
      .filter((entity) => {
        if (otherPrimaryEntities.find((e) => e.entity === entity.entity)) {
          return false;
        }
        return true;
      })
      .filter((entity) => {
        if (entity.entity !== rootEntity.entity) {
          return true;
        } else if (
          entity.entity === rootEntity.entity &&
          !rootEntityOccurrence
        ) {
          rootEntityOccurrence = true;
          return true;
        }

        return false;
      });

    return {
      rootEntity: rootEntityNlpObject,
      otherEntities: singleRootEntities.filter(
        (e) => e.entity !== rootEntity.entity,
      ),
    };
  }

  private getFiltersOfRootEntity(
    rootEntity: FormattedEntity,
    otherEntities: FormattedEntity[],
  ): FormattedEntity[] {
    const filtersOfRootEntity =
      EntityStructure[rootEntity.entity].filters ?? {};
    if (Object.keys(filtersOfRootEntity).length === 0) {
      return [];
    }

    // Add Tag and priority to each entity in otherEntities
    const otherEntitiesWithTagAndPriority = otherEntities
      .map((entity) => ({
        ...entity,
        tag: filtersOfRootEntity[entity.entity]?.tag ?? '',
        priority: filtersOfRootEntity[entity.entity]?.priority ?? 1,
        graphqlArgName: filtersOfRootEntity[entity.entity]?.graphqlArgName,
      }))
      .filter((e) => e.tag);

    const groupedFilters = groupBy(otherEntitiesWithTagAndPriority, 'tag');

    const finalFilters: FormattedEntity[] = [];
    Object.keys(groupedFilters).forEach((key) => {
      const value = groupedFilters[key];
      const sortedFilters = sortBy(value, ['priority']);
      const priority = sortedFilters[0].priority;
      finalFilters.push(
        ...sortedFilters.filter((f) => f.priority === priority),
      );
    });
    return finalFilters;
  }
}

interface FormattedEntity {
  start: number;
  end: number;
  entity: string;
  sourceText: string;
  graphql?: {
    queryName: string;
    returnFields: Record<string, unknown>;
  };
  graphqlArgName?: string;
}
