import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription-plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription-plan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SubscriptionPlan } from './entities/subscription-plan.schema';
import { Model } from 'mongoose';

@Injectable()
export class SubscriptionPlanService {
  constructor(
    @InjectModel(SubscriptionPlan.name)
    private readonly SubscriptionModel: Model<SubscriptionPlan>,
  ) {}

  async create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    try {
      // Check if a subscription plan with the same title already exists
      const existingSubscription = await this.SubscriptionModel.findOne({
        subscriptionTitle: createSubscriptionPlanDto.subscriptionTitle,
      });

      if (existingSubscription) {
        throw new ConflictException('Subscription title must be unique');
      }

      const newSubscriptionPlan = new this.SubscriptionModel(
        createSubscriptionPlanDto,
      );
      const savedSubscription = await newSubscriptionPlan.save();

      console.log('Subscription created:', savedSubscription);

      return { message: 'Subscription created' };
    } catch (error) {
      console.error('Error creating subscription:', error.message);
      throw error;
    }
  }

  async findAll() {
    try {
      const subscriptionPlans = await this.SubscriptionModel.find().exec();
      return subscriptionPlans
    } catch (error) {
      console.error('Error fetching subscription plans:', error.message);
      throw error;
    }
  }

  // async findAll() {
  //   try {
  //     const subscriptionPlans = await this.SubscriptionModel.find().exec();
  //     return subscriptionPlans;
  //   } catch (error) {
  //     console.error("Error fetching subscription plans:", error.message);
  //     throw error; // Handle the error according to your application's needs
  //   }
  // }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionPlan`;
  }

  update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return `This action updates a #${id} subscriptionPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionPlan`;
  }
}
