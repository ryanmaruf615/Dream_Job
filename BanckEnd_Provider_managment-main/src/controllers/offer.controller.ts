import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../auth/guard/auth.guard";
import { CreateOfferDto } from "../dtos/offer.dto";
import { OfferModel } from "../models";
import { OfferService } from "../services";
import { DeepPartial } from "typeorm";

@ApiTags('offer')
@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('provider/:id')
  async create(
    @Body() dto: CreateOfferDto,
    @Param('id') providerId: number
  ) {
      return await this.offerService.create(dto, providerId);
  }

  @Get('provider/:id')
  async getOfferByProviderId(
    @Param('id') providerId: number,
  ):Promise<DeepPartial<OfferModel[]>>{
    return await this.offerService.getOffersByProviderId(providerId);
  }

  @Get('agreement/:id')
  async getAllOfferByAgreementId(
    @Param('id') agreementId: number,
  ){
    return await this.offerService.getAllOfferByAgreementId(agreementId);
  }

  @Get('/:id')
  async getOfferById(
    @Param('id') offerId: number,
  ){
    const offer = await this.offerService.getOfferById(offerId);
    return offer.toDto();
  }

  @Put('update/:id')
  async updateOfferById(
    @Param('id') offerId: number,
    @Body() dto: CreateOfferDto,
  )
  {
    return await this.offerService.updateOfferById(offerId, dto);
  }
}