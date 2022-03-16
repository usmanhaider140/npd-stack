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
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createSubscribeDto: CreateSubscribeDto) {
    return this.subscribeService.create(createSubscribeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.subscribeService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.subscribeService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribeService.update(id, updateSubscribeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.subscribeService.remove(id);
  }
}
