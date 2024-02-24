import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly user: UserService,
  ) {}

  async login(username: string, password: string) {
    const compare = await this.user.validatePassword(username, password);

    if (!compare) {
      throw new UnauthorizedException('Incorrect username or password.');
    }

    const user = await this.user.getByUsername(username);

    const token = this.jwtService.sign(user);

    return {
      user,
      token,
    };
  }
}
