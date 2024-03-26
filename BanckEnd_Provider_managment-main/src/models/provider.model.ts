interface IProviderModel{
  id: number;
  name: string;
  address: string;
  phone: string;
  rule: string;
  contactName: string;
  email: string;
  role: string;
  masterAgreementType: string;
  review: number;
  existSince: string;
  validFrom: string;
  validUntil: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ProviderModel {
  public id: number;
  public name: string;
  public address: string;
  public phone: string;
  public rule: string
  public role: string
  public email: string
  public contactName: string
  public masterAgreementType: string;
  public review: number;
  public existSince: string;
  public validFrom: string;
  public validUntil: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IProviderModel) {
  this.id= props.id;
  this.phone= props.phone;
  this.rule= props.rule;
  this.name= props.name;
  this.address= props.address;
  this.contactName= props.contactName;
  this.role= props.role;
  this.email= props.email;
  this.existSince= props.existSince;
  this.validFrom= props.validFrom;
  this.validUntil= props.validUntil;
  this.masterAgreementType= props.masterAgreementType;
  this.review= props.review;
  this.createdAt= props.createdAt;
  this.updatedAt= props.createdAt;
  }
}