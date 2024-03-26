import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyAgreementTable1703725209598 implements MigrationInterface {
    name = 'modifyAgreementTable1703725209598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`providerName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`providerEmail\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`providerEmail\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`providerName\``);
    }

}
