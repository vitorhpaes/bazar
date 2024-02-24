import { Controller, Body, Post } from '@nestjs/common';
import { GuestService } from 'src/modules/guest/guest.service';
import { CreateGuestDto } from 'src/modules/guest/dto/create.guest.dto';

@Controller('guest')
export class GuestController {
  constructor(private readonly guest: GuestService) {}

  @Post()
  create(@Body() newGuest: CreateGuestDto) {
    return this.guest.create(newGuest);
  }
}
