import { DeepPartial, EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";
import { OfferModel } from "../models";
import { OfferEntity } from "../entities/offer.entity";
import { ProviderEntity } from "../entities";

@Injectable()
export class OfferRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async create(offer: OfferModel, provider: ProviderEntity):Promise<DeepPartial<OfferModel>>{
    const offerEntity = this.manager.create<OfferEntity>(
      OfferEntity,
      OfferEntity.fromModel(offer)
    )
    offerEntity.provider = provider;

    const savedOfferEntity = await this.manager.save<OfferEntity>(offerEntity);
    return savedOfferEntity.toDto();
  }

  async getAllOffersByProviderId(id: number): Promise<DeepPartial<OfferModel[]>>{
   const offerEntity: OfferEntity[] = await this.manager.find(OfferEntity, {
     where: { provider: { id: id } },
   })
   return offerEntity.map(entity => entity.toDto());
  }

  async getAllOffersByAgreementId(id: number): Promise<DeepPartial<OfferModel[]>>{
    const offerEntity: OfferEntity[] = await this.manager.find(OfferEntity, {
      where: {
        agreementId: id,
      }
    });
    return offerEntity.map(entity => entity.toDto());
  }

  async findOne(id: number): Promise<OfferEntity>{
    return await this.manager.findOne(OfferEntity, {
      where: { id: id },
      relations: ['provider'],
    });
  }

  async update(id: number, offer: OfferModel){
    await this.manager.update<OfferEntity>(
      OfferEntity,
      id,
      OfferEntity.fromModel(offer),
    );
    return await this.manager.findOne(OfferEntity, id);
  }
}