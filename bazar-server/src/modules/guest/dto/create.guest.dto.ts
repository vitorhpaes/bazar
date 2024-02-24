import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { IsCpf } from 'src/decorators/isCpf.decorator';
import { IsPhone } from 'src/decorators/isPhone.decorator';

export class CreateGuestDto {
  @IsNotEmpty({ message: "O atributo 'name' deve ser informado" })
  @IsString()
  readonly name: string;

  @IsNotEmpty({ message: "O atributo 'document' deve ser informado" })
  @IsCpf()
  readonly document: string;

  @IsNotEmpty({ message: "O atributo 'birthDate' deve ser informado" })
  @IsDateString()
  readonly birthDate: Date;

  @IsNotEmpty({ message: "O atributo 'phoneNumber' deve ser informado" })
  @IsPhone()
  readonly phoneNumber: string;
}
