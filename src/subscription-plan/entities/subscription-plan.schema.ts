import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class SubscriptionPlan extends Document{
@Prop({
    unique:true, message: "Subscription Title must be unique",
    required:true
})
subscriptionTitle:string;
@Prop({required:true})
subscriptionPrice:number;
@Prop({required:true})
oneRegionPrice:number;
@Prop({required:true})
twoRegionPrice:number;
@Prop({required:true})
allRegionPrice:number;
}

export const SubscriptionPlanSchema = SchemaFactory.createForClass(SubscriptionPlan);
