import { Injectable } from "@nestjs/common";
import { AgreementRepository, DealRepository, OfferRepository } from "../repositories";
import { DealEntity } from "../entities";
import { UpdateReviewDto } from "../dtos";

@Injectable()
export class DealService{
  constructor(
    private dealRepository: DealRepository,
    private offerRepository: OfferRepository,
    private agreementRepository: AgreementRepository,
  ) {}

  async create(id: number){
    const offer = await this.offerRepository.findOne(id);
    const agreement = await this.agreementRepository.findOne(offer.agreementId);

    let dealEntity = new  DealEntity();
    dealEntity.offer = offer;
    dealEntity.provider = offer.provider;
    dealEntity.agreement =  agreement;
    dealEntity.review = -1;

    return await this.dealRepository.create(dealEntity, agreement.id);
  }

  async getAll(){
    return await this.dealRepository.find();
  }

  async giveReview(id: number, dto: UpdateReviewDto){
      return  await this.dealRepository.saveReview(id, dto);
  }
}