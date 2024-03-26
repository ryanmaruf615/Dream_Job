import { AgreementRepository } from "../repositories";
import { ModelFactory } from "../utils/model-factory";
import { AgreementModel, ReviewModel } from "../models";
import { DeepPartial } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateAgreementDto } from "../dtos/updateAgreementDto";
import { GiveReviewDto } from "../dtos/giveReview.dto";

@Injectable()
export class AgreementService{
  constructor(private agreementRepository: AgreementRepository) {
  }

  async create(dto: DeepPartial<AgreementModel>):Promise<AgreementModel>{
    const agreement = ModelFactory.create(AgreementModel, dto);
    agreement.status = "pending";
    agreement.cycle = Number(agreement.salary) >= 1000 ? '2' : '1';
    return await this.agreementRepository.insert(agreement);
  }

  async getAll():Promise<AgreementModel[]>{
    return await this.agreementRepository.getAll();
  }

  async filterBySalaryAndSkill(row?: number, skill?: string):Promise<AgreementModel[]>{
    return await this.agreementRepository.filterBySalaryAndSkill(row, skill);
  }

  async getAgreementById(id: number):Promise<AgreementModel>{
    const agreement =  await this.agreementRepository.findOne(id);
    if(!agreement){
      throw new NotFoundException(`Could not find agreement with id: ${id}`);
    }
    return agreement.toModel();
  }

  async updateAgreementById(id: number, dto: UpdateAgreementDto): Promise<AgreementModel>{
    const updatedAgreement = ModelFactory.create(AgreementModel, dto);
    const agreement = await this.agreementRepository.findOne(id);
    if (!agreement){
      throw new NotFoundException(`Could not find agreement with id: ${id}`);
    }
    return await this.agreementRepository.update(agreement.id, updatedAgreement);
  }

  async giveReviewById(id: number, dto: GiveReviewDto): Promise<ReviewModel>{
    const giveReview = ModelFactory.create(ReviewModel, dto);
    const agreement = await this.agreementRepository.findOne(id);
    if (!agreement){
      throw new NotFoundException(`Could not find agreement with id: ${id}`);
    }
    giveReview.agreementId = agreement.id;
    return await this.agreementRepository.review(giveReview);
  }

  async getReview(id: number){
    return await this.agreementRepository.getReview(id);
  }

  async getAvg(id: number){
    return await this.agreementRepository.getAvg(id);
  }
}