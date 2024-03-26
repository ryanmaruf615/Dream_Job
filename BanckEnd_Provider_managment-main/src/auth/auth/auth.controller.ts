import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninDto, SignupDto } from "src/dtos";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('authentication')
@Controller('auth')
export class AuthController{
constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto){
    return await this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: SigninDto){
    return await this.authService.signin(dto);
  }
}