import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty({ message: "O atributo 'startTime' deve ser informado" })
  @IsDateString({}, { message: 'date must be a valid ISO 8601 date  string' })
  readonly startTime: Date;

  @IsNotEmpty({ message: "O atributo 'guestId' deve ser informado" })
  @IsString()
  readonly guestId: string;
  
  @IsNotEmpty({ message: "O atributo 'acceptedTerms' deve ser informado" })
  @IsBoolean()
  readonly acceptedTerms: boolean;
}
