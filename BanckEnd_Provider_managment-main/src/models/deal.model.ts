import { ProviderModel } from "./provider.model";
import { AgreementModel } from "./agreement.model";
import { OfferModel } from "./offer.model";

export interface IDealModel {
  id: number;
  provider: ProviderModel;
  agreement: AgreementModel;
  offer: OfferModel;
  review: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class DealModel {
  public id: number;
  public provider: ProviderModel;
  public agreement: AgreementModel
  public offer: OfferModel;
  public review: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IDealModel) {
    this.id = props.id;
    this.provider = props.provider;
    this.agreement = props.agreement;
    this.offer = props.offer;
    this.review = props.review;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}