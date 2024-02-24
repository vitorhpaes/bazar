import { Controller, Post, Body } from '@nestjs/common';
import { BookingsService } from 'src/modules/bookings/bookings.service';
import { CreateBookingDto } from 'src/modules/bookings/dto/create.booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly booking: BookingsService) {}

  @Post()
  book(@Body() { startTime, guestId }: CreateBookingDto) {
    return this.booking.book(startTime, guestId);
  }
}
