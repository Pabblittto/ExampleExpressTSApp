import { MigrationInterface, QueryRunner } from "typeorm";

export class GroupAddedCodeCreation1643455184310 implements MigrationInterface {
  name = "GroupAddedCodeCreation1643455184310";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "accessCode" varchar NOT NULL, "codeCreationTime" integer)`
    );
    await queryRunner.query(
      `INSERT INTO "temporary_group"("id", "name", "accessCode") SELECT "id", "name", "accessCode" FROM "group"`
    );
    await queryRunner.query(`DROP TABLE "group"`);
    await queryRunner.query(`ALTER TABLE "temporary_group" RENAME TO "group"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "accessCode" varchar, "codeCreationTime" integer)`
    );
    await queryRunner.query(
      `INSERT INTO "temporary_group"("id", "name", "accessCode", "codeCreationTime") SELECT "id", "name", "accessCode", "codeCreationTime" FROM "group"`
    );
    await queryRunner.query(`DROP TABLE "group"`);
    await queryRunner.query(`ALTER TABLE "temporary_group" RENAME TO "group"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "group" RENAME TO "temporary_group"`);
    await queryRunner.query(
      `CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "accessCode" varchar NOT NULL, "codeCreationTime" integer)`
    );
    await queryRunner.query(
      `INSERT INTO "group"("id", "name", "accessCode", "codeCreationTime") SELECT "id", "name", "accessCode", "codeCreationTime" FROM "temporary_group"`
    );
    await queryRunner.query(`DROP TABLE "temporary_group"`);
    await queryRunner.query(`ALTER TABLE "group" RENAME TO "temporary_group"`);
    await queryRunner.query(
      `CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "accessCode" varchar NOT NULL)`
    );
    await queryRunner.query(
      `INSERT INTO "group"("id", "name", "accessCode") SELECT "id", "name", "accessCode" FROM "temporary_group"`
    );
    await queryRunner.query(`DROP TABLE "temporary_group"`);
  }
}
