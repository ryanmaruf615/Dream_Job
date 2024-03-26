import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger";
import { DealService } from "../services";
import { UpdateReviewDto } from "../dtos";

@ApiTags('deal')
@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post('offer/:id')
  async create(@Param('id') offerId : number) {
      return await this.dealService.create(offerId);
  }

  @Get()
  async getAll(){
    return await this.dealService.getAll();
  }

  @Patch('/:id/review')
  async updateOfferById(
    @Param('id') dealId: number,
    @Body() dto: UpdateReviewDto,
  )
  {
    return await this.dealService.giveReview(dealId, dto);
  }
}