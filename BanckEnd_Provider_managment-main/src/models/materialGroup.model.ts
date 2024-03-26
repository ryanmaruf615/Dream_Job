export interface IMaterialGroupModel {
  id: number;
  name: string;
  description: string;
  price: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class MaterialGroupModel {
  public id: number;
  public name: string;
  public description: string
  public price: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IMaterialGroupModel) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}