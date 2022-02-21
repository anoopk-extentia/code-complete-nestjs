import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoleAdded1645187268998 implements MigrationInterface {
  name = 'RoleAdded1645187268998';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "name" ADD "role" character varying(10)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "role"`);
  }
}
