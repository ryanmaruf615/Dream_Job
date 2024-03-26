import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyAgreementTableTwo1703725660227 implements MigrationInterface {
    name = 'modifyAgreementTableTwo1703725660227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`technologyLevel\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`role\` varchar(255) NOT NULL`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`technologyLevel\``);
    }

}
