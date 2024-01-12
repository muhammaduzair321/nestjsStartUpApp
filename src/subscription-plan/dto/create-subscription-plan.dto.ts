import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSubscriptionPlanDto {
    @ApiProperty({description:"Subscription Title"})
    @IsString()
    @IsNotEmpty()
    subscriptionTitle: string;
    @ApiProperty({description:"Price of the subscription"})
    @IsNumber()
    @IsNotEmpty()
    subscriptionPrice: number;
    @ApiProperty({description:"Price of the one Region"})
    @IsNumber()
    @IsNotEmpty()
    oneRegionPrice: number;
    @ApiProperty({description:"Price of the two Region"})
    @IsNumber()
    @IsNotEmpty()
    twoRegionPrice: number;
    @ApiProperty({description:"Price of the All Region"})
    @IsNumber()
    @IsNotEmpty()
    allRegionPrice: number;
}
