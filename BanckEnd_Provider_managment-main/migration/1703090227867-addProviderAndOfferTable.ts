import {MigrationInterface, QueryRunner} from "typeorm";

export class addProviderAndOfferTable1703090227867 implements MigrationInterface {
    name = 'addProviderAndOfferTable1703090227867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`offer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`agreementId\` int NOT NULL, \`skills\` text NOT NULL, \`experienceLevel\` varchar(255) NOT NULL, \`salary\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`providerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`provider\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`existsSince\` varchar(255) NOT NULL, \`validFrom\` varchar(255) NOT NULL, \`validUntil\` varchar(255) NOT NULL, \`masterAgreementType\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD CONSTRAINT \`FK_9702bff45c3e2bb6965d16023ac\` FOREIGN KEY (\`providerId\`) REFERENCES \`provider\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offer\` DROP FOREIGN KEY \`FK_9702bff45c3e2bb6965d16023ac\``);
        await queryRunner.query(`DROP TABLE \`provider\``);
        await queryRunner.query(`DROP TABLE \`offer\``);
    }

}
