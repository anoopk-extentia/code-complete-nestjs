import {MigrationInterface, QueryRunner} from "typeorm";

export class roleAdded1645189472050 implements MigrationInterface {
    name = 'roleAdded1645189472050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" RENAME COLUMN "roll" TO "role"`);
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "name" ADD "roll" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "name" ADD "role" character varying(10)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "roll"`);
        await queryRunner.query(`ALTER TABLE "name" ADD "role" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "name" RENAME COLUMN "role" TO "roll"`);
    }

}
