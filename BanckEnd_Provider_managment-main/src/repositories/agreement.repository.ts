import { EntityManager, Like } from "typeorm";
import { AgreementModel, ReviewModel } from "../models";
import { Injectable } from "@nestjs/common";
import { AgreementEntity, ReviewEntity } from "../entities";

@Injectable()
export class AgreementRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async insert(agreement: AgreementModel):Promise<AgreementModel>{
    const agreementEntity = await this.manager.save<AgreementEntity>(
      this.manager.create<AgreementEntity>(
        AgreementEntity,
        AgreementEntity.fromModel(agreement)
      )
    );
    return agreementEntity.toModel();
  }

  async getAll(): Promise<AgreementModel[]>{
    return await this.manager.find(AgreementEntity);
  }

  async filterBySalaryAndSkill(row?: number, skill?: string): Promise<AgreementModel[]>{
    if (row && skill){
      return await this.manager
        .createQueryBuilder(AgreementEntity, 'entity')
        .where("entity.skill like :skill", { skill:`%${skill}%` })
        .orderBy('CAST(entity.salary AS INTEGER)', 'ASC')
        .take(row)
        .getMany()


    }
    return await this.manager.find(AgreementEntity);
  }

  async findOne(id: number): Promise<AgreementEntity>{
    return await this.manager.findOne(AgreementEntity, id);
  }

  async update(id: number, updatedAgreementDto: AgreementModel): Promise<AgreementModel> {
    const agreement = await this.manager.findOne(AgreementEntity, id);
    const updatedAgreement = {
      ...agreement,
      ...updatedAgreementDto,
    }

    await this.manager.update<AgreementEntity>(
      AgreementEntity,
      id,
      updatedAgreement,
    );
    return await this.manager.findOne(AgreementEntity, id);
  }

  async review(review: ReviewModel ){
    const reviewEntity = await this.manager.save<ReviewEntity>(
      this.manager.create<ReviewEntity>(
        ReviewEntity,
        ReviewEntity.fromModel(review)
      )
    );
    return reviewEntity.toModel();
  }

  async getReview(id){
    return await this.manager.find(ReviewEntity, {
      where: {agreementId: id}
    });
  }

  async getAvg(id){
    const reviews =  await this.manager.find(ReviewEntity, {
      where: {agreementId: id}
    });

    const sum = reviews.reduce( ( sum, { review } ) => sum + parseFloat(String(review)) , 0.00);
    return sum ? sum/reviews.length : 0;
  }

}