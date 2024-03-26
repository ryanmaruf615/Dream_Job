import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CreateReviewDto } from "../dtos";
import { ReviewModel } from "../models";

@Entity({name: 'review'})
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  agreementId: number;

  @Column("decimal", { precision: 5, scale: 2, nullable:true })
  review?: number;

  @Column({nullable:true })
  comment?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

static fromModel(model: CreateReviewDto): ReviewEntity{
    const entity = new ReviewEntity();
    entity.agreementId = model.agreementId;
    entity.review = model.review;
    entity.comment = model.comment;
    return entity;
  }

  toModel(): ReviewModel {
    return new ReviewModel({
      id: this.id,
      agreementId: this.agreementId,
      review: this.review,
      comment: this.comment,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}