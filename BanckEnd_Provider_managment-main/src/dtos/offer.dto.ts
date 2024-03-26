import { IsEmail, IsNotEmpty, IsString, IsLowercase, IsDateString, IsArray, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOfferDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  agreementId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  skills: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  experienceLevel: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  salary: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rule: string;
}
