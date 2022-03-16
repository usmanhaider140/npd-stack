import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubscriptionPlanModule } from './subscription-plan/subscription-plan.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, SubscriptionPlanModule, SubscribeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
