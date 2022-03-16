import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';

@Injectable()
export class SubscriptionPlanService {
  constructor(private prismaService: PrismaService) {}
  create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlan.create({
      data: createSubscriptionPlanDto,
    });
  }

  findAll() {
    return this.prismaService.subscriptionPlan.findMany();
  }

  findOne(id: string) {
    return this.prismaService.subscriptionPlan.findFirst({ where: { id } });
  }

  update(id: string, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlan.update({
      where: { id },
      data: updateSubscriptionPlanDto,
    });
  }

  remove(id: string) {
    return this.prismaService.subscriptionPlan.delete({ where: { id } });
  }
}
