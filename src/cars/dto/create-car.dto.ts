import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  //We decide the type of datas
  @IsString()
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}
