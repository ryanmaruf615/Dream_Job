import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyAgreementTableForReview1703806688937 implements MigrationInterface {
    name = 'modifyAgreementTableForReview1703806688937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`review\` decimal(5,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`agreement\` ADD \`comment\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`comment\``);
        await queryRunner.query(`ALTER TABLE \`agreement\` DROP COLUMN \`review\``);
    }
}
