import {MigrationInterface, QueryRunner} from "typeorm";

export class addAgreementTable1701909270508 implements MigrationInterface {
    name = 'addAgreementTable1701909270508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`agreement\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`skills\` text NOT NULL, \`validFrom\` varchar(255) NOT NULL, \`validUntil\` varchar(255) NOT NULL, \`cycle\` varchar(255) NOT NULL, \`materialGroup\` varchar(255) NOT NULL, \`dailyRateIndicator\` varchar(255) NOT NULL, \`deadline\` text NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`agreement\``);
    }

}
