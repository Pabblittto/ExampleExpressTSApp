import {MigrationInterface, QueryRunner} from "typeorm";

export class init1641124642783 implements MigrationInterface {
    name = 'init1641124642783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
