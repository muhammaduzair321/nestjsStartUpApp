import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({required:true})
  firstName:string;
  @Prop({required:true})
  lastName:string;
  @Prop({
    unique: true, message: 'user with this email is already here',
    required:true })
  email: string;
  @Prop({required:true})
  password: string;
  @Prop({required:true})
  street:string;
  @Prop({required:true})
  city:string;
  @Prop({required:true})
  country:string;
  @Prop({required:true})
  province:string;
  @Prop({required:true})
  postalCode:number;
  @Prop({required:true})
  invoiceNumber:number;
  @Prop({required:true , default:"user"})
  userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
