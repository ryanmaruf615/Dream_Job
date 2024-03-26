import {MigrationInterface, QueryRunner} from "typeorm";

export class addReviewTable1704893715757 implements MigrationInterface {
    name = 'addReviewTable1704893715757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` int NOT NULL AUTO_INCREMENT, \`agreementId\` int NOT NULL, \`review\` decimal(5,2) NULL, \`comment\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`DROP TABLE \`review\``);
    }

}
