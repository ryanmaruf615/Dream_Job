import { IsEmail, IsNotEmpty, IsString, IsLowercase } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class SigninDto{
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}