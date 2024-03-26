import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyAgreementTableForCol1703803261671 implements MigrationInterface {
    name = 'modifyAgreementTableForCol1703803261671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`materialGroup\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`teamMember\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`teamMember\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`materialGroup\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`userId\` int NOT NULL`);
    }

}
