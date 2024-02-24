import { IsString, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}
