import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedWebsiteInRestaurant1641739414508 implements MigrationInterface {
    name = 'AddedWebsiteInRestaurant1641739414508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_restaurant" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "website" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_restaurant"("id", "name") SELECT "id", "name" FROM "restaurant"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`ALTER TABLE "temporary_restaurant" RENAME TO "restaurant"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME TO "temporary_restaurant"`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "restaurant"("id", "name") SELECT "id", "name" FROM "temporary_restaurant"`);
        await queryRunner.query(`DROP TABLE "temporary_restaurant"`);
    }

}
