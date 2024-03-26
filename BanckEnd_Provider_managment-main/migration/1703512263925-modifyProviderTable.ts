import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyProviderTable1703512263925 implements MigrationInterface {
    name = 'modifyProviderTable1703512263925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`existsSince\``);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`rule\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`contractName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`existSince\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`existSince\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`contractName\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`rule\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`existsSince\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`email\` varchar(255) NOT NULL`);
    }

}
