import { MigrationInterface, QueryRunner } from 'typeorm';

export class oneManyRelAdded1646231277700 implements MigrationInterface {
  name = 'oneManyRelAdded1646231277700';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "name" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "name" ADD CONSTRAINT "FK_81f044c8ea731bfe965a2d2fc72" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "name" DROP CONSTRAINT "FK_81f044c8ea731bfe965a2d2fc72"`,
    );
    await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "user_id"`);
  }
}
