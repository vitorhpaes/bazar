import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateScheduleDayDto {
  @IsNotEmpty({ message: "O atributo 'date' deve ser informado" })
  @IsDateString({}, { message: 'date must be a valid ISO 8601 date  string' })
  readonly date: Date;

  @IsNotEmpty({ message: "O atributo 'startTime' deve ser informado" })
  @IsDateString({}, { message: 'date must be a valid ISO 8601 date  string' })
  readonly startTime: Date;

  @IsNotEmpty({ message: "O atributo 'endTime' deve ser informado" })
  @IsDateString({}, { message: 'date must be a valid ISO 8601 date  string' })
  readonly endTime: Date;
}
