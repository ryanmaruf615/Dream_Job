import { Controller, Get } from "@nestjs/common";
import {ApiOkResponse, ApiTags } from "@nestjs/swagger";
@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
  @Get()
  @ApiOkResponse({
    description: 'Provider Management API is healthy',
  })
  async checkAppHealth() {
    return {
      appName: 'Provider Management Api',
      status: true,
    };
  }
}
