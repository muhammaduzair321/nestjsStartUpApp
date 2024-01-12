import { Module } from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';
import { SubscriptionPlanController } from './subscription-plan.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionPlan, SubscriptionPlanSchema } from './entities/subscription-plan.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: SubscriptionPlan.name , schema: SubscriptionPlanSchema  },
    ]),
  ],
  controllers: [SubscriptionPlanController],
  providers: [SubscriptionPlanService],
})
export class SubscriptionPlanModule {}
