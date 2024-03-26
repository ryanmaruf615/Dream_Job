import { DeepPartial, EntityManager } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { MaterialGroupModel } from "../models";
import { MaterialGroupEntity } from "../entities";

@Injectable()
export class MaterialGroupRepository{
  constructor(private readonly manager: EntityManager) {
  }

  async create(materialGroup: MaterialGroupModel):Promise<MaterialGroupModel>{
    const materialGroupEntity = this.manager.create<MaterialGroupEntity>(
      MaterialGroupEntity,
      MaterialGroupEntity.fromModel(materialGroup)
    )

    const savedMaterialGroupEntity = await this.manager.save<MaterialGroupEntity>(materialGroupEntity);
    return savedMaterialGroupEntity.toModel();
  }

  async find(): Promise<DeepPartial<MaterialGroupModel[]>>{
    const offerEntity = await this.manager.find(MaterialGroupEntity);
    return offerEntity.map(entity => entity.toModel());
  }

  async findOne(id: number): Promise<DeepPartial<MaterialGroupModel>>{
    const materialGroupEntity = await this.manager.findOne(MaterialGroupEntity, id);
    if (!materialGroupEntity){
      throw new NotFoundException(`Could not find materialGroup with id: ${id}`);
    }
    return materialGroupEntity.toModel();
  }

  async update(id: number, materialGroupModel: MaterialGroupModel){
    await this.manager.update<MaterialGroupModel>(
      MaterialGroupEntity,
      id,
      MaterialGroupEntity.fromModel(materialGroupModel),
    );
    return await this.manager.findOne(MaterialGroupEntity, id);
  }
}