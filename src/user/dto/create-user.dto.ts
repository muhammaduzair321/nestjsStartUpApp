import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger"
export class CreateUserDto {


  @ApiProperty({description:"Email of the user"})
  @IsEmail({},{message:"Please enter valid email"})
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({description:"Password of the user"})
  @IsString()
  @MinLength(8,{message:'Password must be at least 8 charchaters'})
  @IsNotEmpty()
  readonly password: string;
  
  @ApiProperty({description:"usertype must be add"})
  @IsString()
  @IsNotEmpty()
  readonly usertype: string;


  @ApiProperty({description:"firstName must be add"})
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({description:"lastName must be add"})
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
  @ApiProperty({description:"street must be add"})
  @IsString()
  @IsNotEmpty()
  readonly street: string;
  @ApiProperty({description:"city must be add"})
  @IsString()
  @IsNotEmpty()
  readonly city: string;
  @ApiProperty({description:"country must be add"})
  @IsString()
  @IsNotEmpty()
  readonly country: string;
  @ApiProperty({description:"province must be add"})
  @IsString()
  @IsNotEmpty()
  readonly province: string;
  @ApiProperty({description:"postalCode must be add"})
  @IsNumber()
  @IsNotEmpty()
  readonly postalCode: number;
  @ApiProperty({description:"invoiceNumber must be add"})
  @IsNumber()
  @IsNotEmpty()
  readonly invoiceNumber: number;


  @ApiProperty({description:"coupon must be add"})
  @IsString()
  @IsNotEmpty()
  coupon: string;
  @ApiProperty({description:"payment must be add"})
  @IsNumber()
  @IsNotEmpty()
 payment: number;
 @ApiProperty({description:"details must be add"})
 @IsString()
 @IsNotEmpty()
 details: string;
 @ApiProperty({description:"card number must be add"})
 @IsNumber()
 @IsNotEmpty()
 cardNumber: number;
 @ApiProperty({description:"expiry must be add"})
 @IsString()
 @IsNotEmpty()
 expiry: string;
 @ApiProperty({description:"cvv must be add"})
 @IsString()
 @IsNotEmpty()
 cvv: string;
}

export class LoginUserDto {
  @ApiProperty({description:"Email of the user"})
  @IsEmail({},{message:"Please enter valid email"})
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({description:"Password of the user"})
  @IsString()
  @MinLength(8,{message:'Password must be at least 8 charchaters'})
  @IsNotEmpty()
  readonly password: string;
}
