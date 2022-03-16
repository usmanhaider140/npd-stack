import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateSubscriptionPlanDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  duration: number;
  @IsNotEmpty()
  @IsString()
  durationUnit: string;
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  @IsString()
  currency: string;
}
