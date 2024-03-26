import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyProviderTable1703604670514 implements MigrationInterface {
    name = 'modifyProviderTable1703604670514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` ADD \`review\` decimal(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`provider\` DROP COLUMN \`review\``);
    }

}
