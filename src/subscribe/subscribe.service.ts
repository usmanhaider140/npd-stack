import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';

@Injectable()
export class SubscribeService {
  constructor(private prismaService: PrismaService) {}
  create(createSubscribeDto: CreateSubscribeDto) {
    return this.prismaService.userSubscriptionPlan.create({
      data: createSubscribeDto,
    });
  }

  findAll() {
    return this.prismaService.userSubscriptionPlan.findMany();
  }

  findOne(id: string) {
    return this.prismaService.userSubscriptionPlan.findFirst({ where: { id } });
  }

  update(id: string, updateSubscribeDto: UpdateSubscribeDto) {
    return this.prismaService.userSubscriptionPlan.update({
      where: { id },
      data: updateSubscribeDto,
    });
  }

  remove(id: string) {
    return this.prismaService.userSubscriptionPlan.delete({ where: { id } });
  }
}
