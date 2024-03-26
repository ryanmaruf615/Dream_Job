import { HttpException, HttpStatus, Injectable, ForbiddenException } from "@nestjs/common";
import { SignupDto, SigninDto, UpdateReviewDto } from "src/dtos";
import { EntityManager } from "typeorm";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { IProviderSignedUpResponse, ISigninTokenResponse } from "../../interfaces";
import { JWT_SECRET_PROVIDER } from "../../constants";
import { DealEntity, ProviderEntity } from "../../entities";
import { ProviderSignupDto } from "../../dtos/provider-signup.dto";
import { ModelFactory } from "../../utils/model-factory";
import { ProviderModel } from "../../models";

@Injectable({})
export class AuthProviderService {
  constructor(
    private readonly manager: EntityManager,
    private readonly jwt: JwtService,
  ) {}

  // async signup(dto: ProviderSignupDto): Promise<IProviderSignedUpResponse>{
  //
  //   try {
  //     const user = await this.manager.findOne(ProviderEntity, {email: dto.email});
  //     if (user){
  //       throw new HttpException('Email address already Taken...', HttpStatus.CONFLICT);
  //     }
  //
  //     //hash password
  //     const saltRounds = 10;
  //     const salt = await bcrypt.genSalt(saltRounds);
  //     const hash = await bcrypt.hash(dto.password, salt);
  //     dto.password = hash;
  //
  //     //save provider to db
  //     const provider = ModelFactory.create(ProviderModel, dto);
  //     const providerEntity = this.manager.create(ProviderEntity, ProviderEntity.fromModel(provider));
  //     const savedProviderEntity = await this.manager.save(ProviderEntity, providerEntity);
  //
  //     return {
  //       providerId: savedProviderEntity.id,
  //       email: savedProviderEntity.email,
  //     }
  //   }
  //   catch (error) {
  //     throw error;
  //   }
  // }
  //
  // async signin(dto: SigninDto){
  //   try{
  //     const user = await this.manager.findOne(ProviderEntity, {email: dto.email});
  //     if (!user){
  //       throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //     }
  //     const isMatch = await bcrypt.compare(dto.password, user.password);
  //
  //     if(user && isMatch){
  //       return this.signinToken(user.id, user.email);
  //     }else throw new ForbiddenException();
  //   }
  //   catch(error){
  //     throw error;
  //   }
  // }
  //
  // async signinToken(
  //   userId: number,
  //   email: string
  // ): Promise<ISigninTokenResponse> {
  //   const payload = {
  //     sub: userId,
  //     email,
  //   };
  //   try {
  //     const token = await this.jwt.signAsync(payload, {
  //       expiresIn: '200m',
  //       secret: JWT_SECRET_PROVIDER,
  //     });
  //     return {
  //       userId: userId,
  //       email: email,
  //       access_token: token,
  //     };
  //   } catch (error) {
  //     throw  error;
  //   }
  // }

  async create(dto: ProviderSignupDto) {
    const provider = ModelFactory.create(ProviderModel, dto);
    provider.review = 0;
    const providerEntity = this.manager.create(ProviderEntity, ProviderEntity.fromModel(provider));
    const savedProviderEntity =  await this.manager.save(ProviderEntity,
      providerEntity);

    return savedProviderEntity.toModel()
  }


  async review(id: number, dto: UpdateReviewDto) {
    await this.manager.update(ProviderEntity, id, dto);
    return await this.manager.findOne(ProviderEntity, id);
  }

  async getProviders() {
    return await this.manager.find(ProviderEntity);
  }

  async get(id: number) {
    return await this.manager.findOne(ProviderEntity, id);
  }
}
