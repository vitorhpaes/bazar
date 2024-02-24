import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        ...userDto,
        password: await bcrypt.hash(userDto.password, 12),
      },
    });
  }

  async getByUsername(username: string) {
    return await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }

  async validatePassword(username: string, password: string) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        username,
      },
    });

    const isValidPassword = await bcrypt.compare(password, user.password);

    return isValidPassword;
  }
}
