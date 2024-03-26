import { ModelFactory } from "../utils/model-factory";
import { DeepPartial } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { OfferModel } from "../models";
import { OfferRepository, ProviderRepository } from "../repositories";

@Injectable()
export class OfferService{
  constructor(
    private offerRepository: OfferRepository,
    private providerRepository: ProviderRepository
  ) {}

  async create(dto: DeepPartial<OfferModel>, id: number){
    const offer = ModelFactory.create(OfferModel, dto);
    const provider = await this.providerRepository.findOne(id);
    return await this.offerRepository.create(offer, provider);
  }

  async getOffersByProviderId(id: number):Promise<DeepPartial<OfferModel[]>>{
    const offers =  await this.offerRepository.getAllOffersByProviderId(id);
    if(!offers){
      throw new NotFoundException(`Could not find offers with providerId: ${id}`);
    }
    return offers;
  }

  async getAllOfferByAgreementId(id: number){
    return await this.offerRepository.getAllOffersByAgreementId(id);
  }

  async getOfferById(id: number){
    return await this.offerRepository.findOne(id);
  }

  async updateOfferById(id: number, dto: DeepPartial<OfferModel>){
      const updatedOffer = ModelFactory.create(OfferModel, dto);
      const offer = await this.offerRepository.findOne(id);
      if (!offer){
        throw new NotFoundException(`Could not find offer with id: ${id}`);
      }
      return await this.offerRepository.update(offer.id, updatedOffer);
  }
}