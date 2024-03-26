import { Module } from "@nestjs/common";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthProviderController } from "./auth-provider/auth-provider.controller";
import { AuthProviderService } from "./auth-provider/auth-provider.service";

@Module({
  imports: [ JwtModule.register({}),],
  controllers: [AuthController, AuthProviderController],
  providers:[AuthService, AuthProviderService],
})

export class AuthModule{}
