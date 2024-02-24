import { Controller, Body, Post } from '@nestjs/common';
import { GuestService } from 'src/modules/guest/guest.service';
import { CreateGuestDto } from 'src/modules/guest/dto/create.guest.dto';
import { IsPublic } from 'src/decorators/isPublic.decorator';

@Controller('guest')
export class GuestController {
  constructor(private readonly guest: GuestService) {}

  @Post()
  @IsPublic()
  create(@Body() newGuest: CreateGuestDto) {
    return this.guest.create(newGuest);
  }
}
