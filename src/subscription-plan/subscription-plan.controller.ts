import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';

@Controller('subscription-plan')
export class SubscriptionPlanController {
  constructor(
    private readonly subscriptionPlanService: SubscriptionPlanService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.subscriptionPlanService.create(createSubscriptionPlanDto);
  }

  @Get()
  findAll() {
    return this.subscriptionPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionPlanService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionPlanDto: UpdateSubscriptionPlanDto,
  ) {
    return this.subscriptionPlanService.update(id, updateSubscriptionPlanDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.subscriptionPlanService.remove(id);
  }
}
