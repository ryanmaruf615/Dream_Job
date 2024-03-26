export interface IUserModel {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isSuperAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserModel {
  public id: number;
  public email: string;
  public password: string
  public firstName: string;
  public lastName: string;
  public isSuperAdmin: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IUserModel) {
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.isSuperAdmin = props.isSuperAdmin;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}