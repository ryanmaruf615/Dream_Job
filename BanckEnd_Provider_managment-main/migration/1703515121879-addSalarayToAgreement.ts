import {MigrationInterface, QueryRunner} from "typeorm";

export class addSalarayToAgreement1703515121879 implements MigrationInterface {
    name = 'addSalarayToAgreement1703515121879'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`salary\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`salary\``);
    }

}
