import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyProviderTable1703726387301 implements MigrationInterface {
    name = 'modifyProviderTable1703726387301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`contractName\``);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`contactName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`contactName\``);
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`contractName\` varchar(255) NOT NULL`);
    }

}
