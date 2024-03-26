import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put, Query, UseGuards } from "@nestjs/common";
import { CreateAgreementDto } from "../dtos";
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import { AgreementService } from "../services";
import { AgreementModel, ReviewModel } from "../models";
import { GiveReviewDto } from "../dtos/giveReview.dto";

@ApiTags('agreement')
@Controller('agreement')
export class AgreementController {
  constructor(private readonly agreementService: AgreementService) {}

  @Post()
  async saveAgreement(@Body() dto: CreateAgreementDto):Promise<AgreementModel>{
    return await this.agreementService.create(dto);
  }

  // @Get()
  // async getAllAgreement():Promise<AgreementModel[]>{
  //   return await this.agreementService.getAll()
  // }

  @ApiQuery({
    name: "row",
    type: Number,
    required: false
  })
  @ApiQuery({
    name: "skill",
    type: String,
    required: false
  })
  @Get()
  async getAgreementsBySalary(
    @Query('row') row?: number,
    @Query('skill') skill?: string,
  ):Promise<AgreementModel[]>{
    return await this.agreementService.filterBySalaryAndSkill(row, skill);
  }

  @Get('/:id')
  async getAgreementById(@Param('id') id: number):Promise<AgreementModel>{
    return await this.agreementService.getAgreementById(id);
  }

  @Put('update/:id')
  async updateAgreementById(
    @Param('id') id: number,
    @Body() dto: CreateAgreementDto):Promise<AgreementModel>
  {
    return await this.agreementService.updateAgreementById(id, dto);
  }

  @Post('/:id/review')
  async giveReview(
    @Param('id') id: number,
    @Body() dto: GiveReviewDto):Promise<ReviewModel>
  {
    return await this.agreementService.giveReviewById(id, dto);
  }

  @Get('/:id/review')
  async getReview(
    @Param('id') id: number,
  )
  {
    return await this.agreementService.getReview(id);
  }


  @Get('/:id/review/avg')
  async getAvg(
    @Param('id') id: number,
  )
  {
    return await this.agreementService.getAvg(id);
  }


}