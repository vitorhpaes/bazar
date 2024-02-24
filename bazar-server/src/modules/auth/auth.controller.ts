import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

import { IsPublic } from '../../decorators/isPublic.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @IsPublic()
  async login(@Body() data: AuthDto) {
    return this.authService.login(data.username, data.password);
  }
}
