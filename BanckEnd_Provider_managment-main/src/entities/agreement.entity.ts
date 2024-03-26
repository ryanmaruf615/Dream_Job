import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { AgreementModel } from "../models";
import { DealEntity } from "./deal.entity";

@Entity({name: 'agreement'})
export class AgreementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  position: string;

  @Column()
  providerName: string;

  @Column()
  providerEmail: string;

  @Column()
  skill: string;

  @Column()
  salary: string;

  @Column()
  description: string

  @Column()
  cycle: string;

  @Column()
  materialGroup: string;

  @Column()
  teamMember: string;

  @Column()
  technologyLevel: string;

  @Column()
  role: string;

  @Column()
  status: string;

  @Column()
  jobStartDate: string;

  @Column()
  jobEndDate: string;

  @Column()
  startContractDate: string;

  @Column("decimal", { precision: 5, scale: 2, nullable:true })
  review?: number;

  @Column({nullable:true })
  comment?: string;

  @Column()
  endContractDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => DealEntity, (deal) => deal.agreement)
  deal: DealEntity;

static fromModel(model: AgreementModel): AgreementEntity{
    const entity = new AgreementEntity();
    entity.title = model.title;
    entity.position = model.position;
    entity.description = model.description;
    entity.skill = model.skill;
    entity.salary = model.salary;
    entity.providerName = model.providerName;
    entity.providerEmail = model.providerEmail;
    entity.technologyLevel = model.technologyLevel;
    entity.role = model.role;
    entity.status = model.status;
    entity.cycle = model.cycle;
    entity.materialGroup = model.materialGroup;
    entity.teamMember = model.teamMember;
    entity.jobStartDate = model.jobStartDate;
    entity.jobEndDate = model.jobEndDate;
    entity.startContractDate = model.startContractDate;
    entity.endContractDate = model.endContractDate;
    return entity;
  }

  toModel(): AgreementModel {
    return new AgreementModel({
      id: this.id,
      title: this.title,
      position: this.position,
      description: this.description,
      skill: this.skill,
      salary: this.salary,
      providerName: this.providerName,
      providerEmail: this.providerEmail,
      technologyLevel: this.technologyLevel,
      materialGroup: this.materialGroup,
      teamMember: this.teamMember,
      role: this.role,
      status: this.status,
      cycle: this.cycle,
      review: this.review,
      comment: this.comment,
      jobStartDate: this.jobStartDate,
      jobEndDate: this.jobEndDate,
      startContractDate: this.startContractDate,
      endContractDate: this.endContractDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}