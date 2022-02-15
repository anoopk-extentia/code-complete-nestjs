import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1644393371912 implements MigrationInterface {
  name = 'init1644393371912';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "name" ("id" SERIAL NOT NULL, "text" character varying(12) NOT NULL, CONSTRAINT "PK_86c85ab0235bbe92757ce7a8f57" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "name"`);
  }
}
