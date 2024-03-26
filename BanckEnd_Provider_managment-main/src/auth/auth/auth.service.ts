import { HttpException, HttpStatus, Injectable, ForbiddenException } from "@nestjs/common";
import { SignupDto, SigninDto } from "src/dtos";
import { EntityManager } from "typeorm";
import { UserEntity } from "../../entities/user.entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { ISigninTokenResponse } from "../../interfaces";
import { JWT_SECRET_USER } from "../../constants/constants";

@Injectable({})
export class AuthService{
  constructor(
    private readonly manager: EntityManager,
    private readonly jwt: JwtService,
  ) {}

  async signup(dto: SignupDto): Promise<ISigninTokenResponse>{

    try {
      const user = await this.manager.findOne(UserEntity, {email: dto.email});
      if (user){
        throw new HttpException('Email address already Taken...', HttpStatus.CONFLICT);
      }

      //hash password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(dto.password, salt);
      dto.password = hash;

      //save user to db
      const userEntity = this.manager.create(UserEntity, UserEntity.fromModel(dto));
      const savedUserEntity = await this.manager.save(UserEntity, userEntity);

      return this.signinToken(savedUserEntity.id, savedUserEntity.email);
    }
    catch (error) {
      throw error;
    }
  }

  async signin(dto: SigninDto){
    try{
      const user = await this.manager.findOne(UserEntity, {email: dto.email});
      if (!user){
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const isMatch = await bcrypt.compare(dto.password, user.password);

      if(user && isMatch){
        return this.signinToken(user.id, user.email);
      }else throw new ForbiddenException();
    }
    catch(error){
      throw error;
    }
  }

  async signinToken(
    userId: number,
    email: string
  ): Promise<ISigninTokenResponse> {
    const payload = {
      sub: userId,
      email,
    };
    try {
      const token = await this.jwt.signAsync(payload, {
        expiresIn: '200m',
        secret: JWT_SECRET_USER,
      });
      return {
        userId: userId,
        email: email,
        access_token: token,
      };
    } catch (error) {
      throw  error;
    }
  }
}
