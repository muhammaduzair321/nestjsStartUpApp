import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import { PasswordHasherService } from './password-hasher/password-hasher.service';
import { LoginRsp, SignUpRsp } from 'src/types';
import { JwtService } from '@nestjs/jwt';
import { Payment } from './entities/payment-detail';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
    private hasherService: PasswordHasherService,
    private jwtService:JwtService,
  ) {}

  async signup(userDto: CreateUserDto): Promise<SignUpRsp> {
    const user = await this.UserModel.findOne({ email: userDto.email });

    if (user) {
      throw new UnauthorizedException(
        'this user already exist with this email',
      );
    }
    const encryptedPassword = await this.hasherService.hashPassword(
      userDto.password,
    );
    // console.log("password",encryptedPassword)

    const newUser = new this.UserModel({
      email: userDto.email,
      password: encryptedPassword,
      usertype:userDto.usertype,
      firstName:userDto.firstName,
      lastName:userDto.lastName,
      street:userDto.street,
      country:userDto.country,
      province:userDto.province,
      city:userDto.city,
      invoiceNumber:userDto.invoiceNumber,
      postalCode:userDto.postalCode,
    });

    await newUser.save();
    // console.log("newUser",newUser,"userDto",userDto)

    const paymentData = {
      userId:newUser.id,
      coupon : userDto.coupon,
      payment:userDto.payment,
      details:userDto.details,
      cardNumber:userDto.cardNumber,
      expiry:userDto.expiry,
      cvv:userDto.cvv,
    }

    
    
    const payment = new this.paymentModel(paymentData);
    await payment.save();

    return { email: newUser.email };
  }

  async login(doc: LoginUserDto): Promise<LoginRsp> {
    //verify user email
    const user = await this.UserModel.findOne({ email: doc.email });
    if(!user){
      throw new UnauthorizedException(
        'Invalid Email and Password'
      );
    }
    //verify user password
    const matchedPassword =  await this.hasherService.comparepassword(doc.password,user.password) 
    if(matchedPassword){
      //generate JSON web token
      const token = await this.jwtService.signAsync({
        email:user.email,
        id:user._id,
      })
      // console.log("user",user)
      return { token , email: user.email , id: user._id , userType : user.userType}
    }
    else{
      throw new UnauthorizedException (
        'Invalid Email and Password'
      );
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
