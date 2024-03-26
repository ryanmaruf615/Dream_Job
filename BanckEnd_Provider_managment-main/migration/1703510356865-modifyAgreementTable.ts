import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyAgreementTable1703510356865 implements MigrationInterface {
    name = 'modifyAgreementTable1703510356865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`skills\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`validFrom\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`validUntil\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`materialGroup\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`dailyRateIndicator\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`deadline\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`position\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`skill\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`jobStartDate\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`jobEndDate\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`startContractDate\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`endContractDate\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`endContractDate\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`startContractDate\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`jobEndDate\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`jobStartDate\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`skill\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`position\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`deadline\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`dailyRateIndicator\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`materialGroup\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`validUntil\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`validFrom\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`skills\` text NOT NULL`);
    }

}
