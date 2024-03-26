import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne, JoinColumn, DeepPartial
} from "typeorm";
import { DealModel } from "../models";
import { ProviderEntity } from "./provider.entity";
import { AgreementEntity } from "./agreement.entity";
import { OfferEntity } from "./offer.entity";

@Entity({name: 'deal'})
export class DealEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProviderEntity, (provider) => provider.deal)
  provider: ProviderEntity;

  @OneToOne(() => AgreementEntity, (agreement) => agreement.deal)
  @JoinColumn()
  agreement: AgreementEntity;

  @OneToOne(() => OfferEntity, (offer) => offer.deal)
  @JoinColumn()
  offer: OfferEntity;

  @Column()
  review: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

static fromModel(model: DealModel): DealEntity{
    const entity = new DealEntity();
    entity.review = model.review;
    return entity;
  }

  toModel(): DealModel {
    return new DealModel({
      id: this.id,
      provider: this.provider,
      agreement: this.agreement,
      offer: this.offer,
      review: this.review,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }

  toDto(): DeepPartial<DealModel> {
    return {
      id: this.id,
      provider: this.provider.toDto(),
      agreement: this.agreement,
      offer: this.offer,
      review: this.review,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}