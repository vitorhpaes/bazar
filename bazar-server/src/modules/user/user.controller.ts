import { Controller } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}
}
