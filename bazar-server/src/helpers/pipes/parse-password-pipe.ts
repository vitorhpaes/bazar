import { PipeTransform, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ParsePasswordPipe implements PipeTransform {
  async transform(dto: any) {
    console.log({ auth: process.env.AUTH_SECRET });
    if (dto.hasOwnProperty('password')) {
      const password = dto.password;
      dto.password = await bcrypt.hash(password, 12);
    }
    return dto;
  }
}
