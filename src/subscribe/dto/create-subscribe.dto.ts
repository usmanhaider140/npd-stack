import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsDate,
  IsDateString,
} from 'class-validator';
export class CreateSubscribeDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  planId: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;
}
