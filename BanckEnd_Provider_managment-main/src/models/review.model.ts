export interface IReviewModel {
  id: number;
  agreementId: number;
  review: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ReviewModel {
  public id: number;
  public agreementId: number;
  public review: number;
  public comment: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: IReviewModel) {
    this.id = props.id;
    this.agreementId = props.agreementId;
    this.review = props.review;
    this.comment = props.comment;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}