import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  //We decide the type of data and is a way to transport the data
  @IsString()
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}
