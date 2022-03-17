import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubscriptionPlanModule } from './subscription-plan/subscription-plan.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { AuthModule } from './auth/auth.module';
import { StripeModule } from './stripe/stripe.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/public'),
    }),
    UserModule,
    PrismaModule,
    SubscriptionPlanModule,
    SubscribeModule,
    AuthModule,
    StripeModule.forRoot(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
