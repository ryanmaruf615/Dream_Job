import { ModelFactory } from "../utils/model-factory";
import { DeepPartial } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { MaterialGroupModel } from "../models";
import { MaterialGroupRepository } from "../repositories";

@Injectable()
export class MaterialGroupService{
  constructor(
    private materialGroupRepository: MaterialGroupRepository
  ) {}

  async create(dto: DeepPartial<MaterialGroupModel>){
    const materialGroup = ModelFactory.create(MaterialGroupModel, dto);
    return await this.materialGroupRepository.create(materialGroup);
  }

  async getAll(){
    return await this.materialGroupRepository.find();
  }

  async updateById(id: number, dto: DeepPartial<MaterialGroupModel>){
      const updatedMaterialGroup = ModelFactory.create(MaterialGroupModel, dto);
      const materialGroup = await this.materialGroupRepository.findOne(id);
      return await this.materialGroupRepository.update(materialGroup.id, updatedMaterialGroup);
  }
}