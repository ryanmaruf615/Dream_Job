import {MigrationInterface, QueryRunner} from "typeorm";

export class addStatusToAgreement1705829519159 implements MigrationInterface {
    name = 'addStatusToAgreement1705829519159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`status\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`status\``);
    }

}
