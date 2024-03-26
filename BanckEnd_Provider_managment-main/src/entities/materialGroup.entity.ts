import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CreateMaterialGroupDto } from "../dtos";
import { MaterialGroupModel } from "../models";

@Entity({name: 'material_group'})
export class MaterialGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string

  @Column()
  price: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

static fromModel(model: CreateMaterialGroupDto): MaterialGroupEntity{
    const entity = new MaterialGroupEntity();
    entity.name = model.name;
    entity.description = model.description;
    entity.price = model.price;
    return entity;
  }

  toModel(): MaterialGroupModel {
    return new MaterialGroupModel({
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}