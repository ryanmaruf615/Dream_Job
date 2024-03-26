import { IsNotEmpty, IsNumber, Min, Max } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateReviewDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  review: number;
}
