import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entities/user.schema';

@Schema({
  timestamps: true,
})
export class Payment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ required: true })
  coupon: string;
  @Prop({ required: true })
  payment: number;
  @Prop({ required: true })
  details: string;
  @Prop({ required: true })
  cardNumber: number;
  @Prop({ required: true })
  expiry: string;
  @Prop({ required: true })
  cvv: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
