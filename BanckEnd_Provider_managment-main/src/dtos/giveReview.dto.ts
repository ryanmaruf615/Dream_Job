import { IsNotEmpty, IsNumber, Min, Max, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { CreateAgreementDto } from "./createAgreementDto";

export class GiveReviewDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  review: number;

  @ApiProperty()
  @IsString()
  comment: string;
}
