import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: "O atributo 'username' deve ser informado" })
  @IsString()
  readonly username: string;

  @IsNotEmpty({ message: "O atributo 'fullName' deve ser informado" })
  @IsString()
  readonly fullName: string;

  @IsNotEmpty({ message: "O atributo 'password' deve ser informado" })
  @IsString()
  readonly password: string;
}
