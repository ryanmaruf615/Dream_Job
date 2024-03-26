import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger";
import { MaterialGroupService } from "../services";
import { CreateMaterialGroupDto } from "../dtos";

@ApiTags('materialGroup')
@Controller('materialGroup')
export class MaterialGroupController {
  constructor(private readonly materialGroupService: MaterialGroupService) {}

  @Post()
  async create(@Body() dto: CreateMaterialGroupDto) {
      return await this.materialGroupService.create(dto);
  }

  @Get()
  async getAll(){
    return await this.materialGroupService.getAll();
  }

  @Put('update/:id')
  async updateOfferById(
    @Param('id') materialGroupId: number,
    @Body() dto: CreateMaterialGroupDto,
  )
  {
    return await this.materialGroupService.updateById(materialGroupId, dto);
  }
}