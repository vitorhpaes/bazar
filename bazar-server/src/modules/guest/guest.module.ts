import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/connections/prisma/prisma.module';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { BookingsService } from 'src/modules/bookings/bookings.service';
import { SlotService } from 'src/modules/slot/slot.service';

@Module({
  imports: [PrismaModule],
  controllers: [GuestController],
  providers: [GuestService, BookingsService, SlotService],
})
export class GuestModule {}
