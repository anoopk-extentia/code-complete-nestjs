import {MigrationInterface, QueryRunner} from "typeorm";

export class rollAdded1645004345300 implements MigrationInterface {
    name = 'rollAdded1645004345300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" ADD "roll" character varying(10)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "roll"`);
    }

}
