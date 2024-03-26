import {MigrationInterface, QueryRunner} from "typeorm";

export class addNewColInOfferTable1703164228980 implements MigrationInterface {
    name = 'addNewColInOfferTable1703164228980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offer\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD \`rule\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offer\` DROP COLUMN \`rule\``);
        await queryRunner.query(`ALTER TABLE \`offer\` DROP COLUMN \`category\``);
    }

}
