import { Module } from '@nestjs/common';
import { JwtStrategy } from './../../helpers/strategies/jwt-strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../../connections/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '604800s' },
    }),
    PrismaModule,
  ],
  providers: [AuthService, JwtStrategy, UserService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
