import { EntityManager } from "typeorm";
import { AgreementModel, ProviderModel } from "../models";
import { Injectable } from "@nestjs/common";
import { AgreementEntity, ProviderEntity } from "../entities";
import { ProviderResponseDto } from "../dtos";

@Injectable()
export class ProviderRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async getAll(): Promise<ProviderResponseDto[]>{
    const providerEntity: ProviderEntity[] = await this.manager.find(ProviderEntity);
    return providerEntity.map(entity => entity.toDto());
  }

  async findOne(id: number): Promise<ProviderEntity>{
    return await this.manager.findOne(ProviderEntity, id);
  }
}