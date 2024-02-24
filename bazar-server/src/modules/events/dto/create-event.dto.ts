import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty({ message: "O atributo 'description' deve ser informado" })
  @IsString()
  readonly description: string;
}
