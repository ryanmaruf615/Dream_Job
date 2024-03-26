import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";
import {
  AgreementController,
  OfferController,
  MaterialGroupController,
  DealController,
  HealthCheckController
} from "./controllers";
import { AgreementService, DealService, MaterialGroupService, OfferService } from "./services";
import { JwtService } from "@nestjs/jwt";
import {
  AgreementRepository,
  DealRepository,
  MaterialGroupRepository,
  OfferRepository,
  ProviderRepository
} from "./repositories";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [
    HealthCheckController,
    AgreementController,
    OfferController,
    MaterialGroupController,
    DealController,
  ],
  providers: [
    JwtService,
    AgreementService,
    OfferService,
    MaterialGroupService,
    DealService,
    AgreementRepository,
    OfferRepository,
    MaterialGroupRepository,
    ProviderRepository,
    DealRepository,
  ],
})
export class AppModule {}
