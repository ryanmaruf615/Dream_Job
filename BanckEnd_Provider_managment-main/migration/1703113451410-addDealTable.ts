import {MigrationInterface, QueryRunner} from "typeorm";

export class addDealTable1703113451410 implements MigrationInterface {
    name = 'addDealTable1703113451410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`deal\` (\`id\` int NOT NULL AUTO_INCREMENT, \`review\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`providerId\` int NULL, \`agreementId\` int NULL, \`offerId\` int NULL, UNIQUE INDEX \`REL_5ed8c78eb7d832c0839edb3281\` (\`agreementId\`), UNIQUE INDEX \`REL_4223a06f76d240b2a4ba448b0a\` (\`offerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`deal\` ADD CONSTRAINT \`FK_ebe31ce99ad3cc82157a3c9c682\` FOREIGN KEY (\`providerId\`) REFERENCES \`provider\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`deal\` ADD CONSTRAINT \`FK_5ed8c78eb7d832c0839edb32813\` FOREIGN KEY (\`agreementId\`) REFERENCES \`agreement\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`deal\` ADD CONSTRAINT \`FK_4223a06f76d240b2a4ba448b0a6\` FOREIGN KEY (\`offerId\`) REFERENCES \`offer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`deal\` DROP FOREIGN KEY \`FK_4223a06f76d240b2a4ba448b0a6\``);
        await queryRunner.query(`ALTER TABLE \`deal\` DROP FOREIGN KEY \`FK_5ed8c78eb7d832c0839edb32813\``);
        await queryRunner.query(`ALTER TABLE \`deal\` DROP FOREIGN KEY \`FK_ebe31ce99ad3cc82157a3c9c682\``);
        await queryRunner.query(`DROP INDEX \`REL_4223a06f76d240b2a4ba448b0a\` ON \`deal\``);
        await queryRunner.query(`DROP INDEX \`REL_5ed8c78eb7d832c0839edb3281\` ON \`deal\``);
        await queryRunner.query(`DROP TABLE \`deal\``);
    }

}
