import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  agreementId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  review: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comment: string;
}