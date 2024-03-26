import { IsEmail, IsNotEmpty, IsString, IsLowercase, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProviderSignupDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rule: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  contactName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  masterAgreementType: string;

  @ApiProperty()
  @IsString()
  existSince: string;

  @ApiProperty()
  @IsString()
  validFrom: string;

  @ApiProperty()
  @IsString()
  validUntil: string;
}