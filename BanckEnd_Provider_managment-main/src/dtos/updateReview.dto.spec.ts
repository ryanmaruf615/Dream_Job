import { UpdateReviewDto } from "./updateReview.dto";
import { DtoFactory } from "../utils/dto-factory";
import { plainToInstance } from "class-transformer";


describe('UpdateReviewDto', () => {
  let dto: UpdateReviewDto;

  beforeEach(() => {
    dto = DtoFactory.create(UpdateReviewDto, {
     review: 4,
    });
  });

  describe('transform', () => {
    it('exposes review to transformed object', () => {
      const review = 3;
      expect(
        plainToInstance(UpdateReviewDto, {
          review: review,
        }),
      ).toEqual(
        expect.objectContaining({
          review: review,
        }),
      );
    });
  });
});