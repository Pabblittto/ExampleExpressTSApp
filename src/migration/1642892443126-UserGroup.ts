import {MigrationInterface, QueryRunner} from "typeorm";

export class UserGroup1642892443126 implements MigrationInterface {
    name = 'UserGroup1642892443126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "accessCode" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "group_users_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fe6cce7d479552c17823e267af" ON "group_users_user" ("groupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_55edea38fece215a3b66443a49" ON "group_users_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "group_admins_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_db16f27942040a764f16a376b8" ON "group_admins_user" ("groupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a" ON "group_admins_user" ("userId") `);
        await queryRunner.query(`DROP INDEX "IDX_fe6cce7d479552c17823e267af"`);
        await queryRunner.query(`DROP INDEX "IDX_55edea38fece215a3b66443a49"`);
        await queryRunner.query(`CREATE TABLE "temporary_group_users_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "FK_fe6cce7d479552c17823e267aff" FOREIGN KEY ("groupId") REFERENCES "group" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_55edea38fece215a3b66443a498" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`INSERT INTO "temporary_group_users_user"("groupId", "userId") SELECT "groupId", "userId" FROM "group_users_user"`);
        await queryRunner.query(`DROP TABLE "group_users_user"`);
        await queryRunner.query(`ALTER TABLE "temporary_group_users_user" RENAME TO "group_users_user"`);
        await queryRunner.query(`CREATE INDEX "IDX_fe6cce7d479552c17823e267af" ON "group_users_user" ("groupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_55edea38fece215a3b66443a49" ON "group_users_user" ("userId") `);
        await queryRunner.query(`DROP INDEX "IDX_db16f27942040a764f16a376b8"`);
        await queryRunner.query(`DROP INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a"`);
        await queryRunner.query(`CREATE TABLE "temporary_group_admins_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "FK_db16f27942040a764f16a376b89" FOREIGN KEY ("groupId") REFERENCES "group" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_98a8017cbf1c22eb8ee57b5e8ae" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`INSERT INTO "temporary_group_admins_user"("groupId", "userId") SELECT "groupId", "userId" FROM "group_admins_user"`);
        await queryRunner.query(`DROP TABLE "group_admins_user"`);
        await queryRunner.query(`ALTER TABLE "temporary_group_admins_user" RENAME TO "group_admins_user"`);
        await queryRunner.query(`CREATE INDEX "IDX_db16f27942040a764f16a376b8" ON "group_admins_user" ("groupId") `);
        await queryRunner.query(`CREATE INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a" ON "group_admins_user" ("userId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a"`);
        await queryRunner.query(`DROP INDEX "IDX_db16f27942040a764f16a376b8"`);
        await queryRunner.query(`ALTER TABLE "group_admins_user" RENAME TO "temporary_group_admins_user"`);
        await queryRunner.query(`CREATE TABLE "group_admins_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`INSERT INTO "group_admins_user"("groupId", "userId") SELECT "groupId", "userId" FROM "temporary_group_admins_user"`);
        await queryRunner.query(`DROP TABLE "temporary_group_admins_user"`);
        await queryRunner.query(`CREATE INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a" ON "group_admins_user" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_db16f27942040a764f16a376b8" ON "group_admins_user" ("groupId") `);
        await queryRunner.query(`DROP INDEX "IDX_55edea38fece215a3b66443a49"`);
        await queryRunner.query(`DROP INDEX "IDX_fe6cce7d479552c17823e267af"`);
        await queryRunner.query(`ALTER TABLE "group_users_user" RENAME TO "temporary_group_users_user"`);
        await queryRunner.query(`CREATE TABLE "group_users_user" ("groupId" integer NOT NULL, "userId" integer NOT NULL, PRIMARY KEY ("groupId", "userId"))`);
        await queryRunner.query(`INSERT INTO "group_users_user"("groupId", "userId") SELECT "groupId", "userId" FROM "temporary_group_users_user"`);
        await queryRunner.query(`DROP TABLE "temporary_group_users_user"`);
        await queryRunner.query(`CREATE INDEX "IDX_55edea38fece215a3b66443a49" ON "group_users_user" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fe6cce7d479552c17823e267af" ON "group_users_user" ("groupId") `);
        await queryRunner.query(`DROP INDEX "IDX_98a8017cbf1c22eb8ee57b5e8a"`);
        await queryRunner.query(`DROP INDEX "IDX_db16f27942040a764f16a376b8"`);
        await queryRunner.query(`DROP TABLE "group_admins_user"`);
        await queryRunner.query(`DROP INDEX "IDX_55edea38fece215a3b66443a49"`);
        await queryRunner.query(`DROP INDEX "IDX_fe6cce7d479552c17823e267af"`);
        await queryRunner.query(`DROP TABLE "group_users_user"`);
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
