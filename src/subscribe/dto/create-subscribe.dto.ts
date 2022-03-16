import { IsString, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';
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
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
}
