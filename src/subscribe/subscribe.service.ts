import { STRIPE_CLIENT } from './../utils/constants';
import { PrismaService } from './../prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import Stripe from 'stripe';

@Injectable()
export class SubscribeService {
  constructor(
    private prismaService: PrismaService,
    @Inject(STRIPE_CLIENT) private readonly stripe: Stripe,
  ) {}
  async create(createSubscribeDto: CreateSubscribeDto) {
    try {
      const subscribePlan = await this.prismaService.subscriptionPlan.findFirst(
        {
          where: { id: createSubscribeDto.planId },
        },
      );

      if (!subscribePlan) {
        throw Error('Subscribe Plan does not found');
      }
      const user = await this.prismaService.user.findFirst({
        where: { id: createSubscribeDto.userId },
      });

      if (!user) {
        throw Error(
          'User does not found. Please Sign up user before subscribe ',
        );
      }

      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.APP_URL}/success`,
        cancel_url: `${process.env.APP_URL}/cancel`,
        line_items: [
          {
            price_data: {
              currency: subscribePlan.currency,
              unit_amount: subscribePlan.price,
              product_data: {
                name: subscribePlan.name,
              },
            },
            quantity: 1,
          },
        ],
      });
      return { url: session.url };
    } catch (e) {
      return e;
    }
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
