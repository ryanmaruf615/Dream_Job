import { IsEmail, IsNotEmpty, IsString, IsLowercase } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class SignupDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}