import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DeadlineDto {
  @ApiProperty()
  @IsString()
  deadline: string;

  @ApiProperty()
  @IsString()
  teamDeadline: string;

  @ApiProperty()
  @IsString()
  contractDeadline: string;
}