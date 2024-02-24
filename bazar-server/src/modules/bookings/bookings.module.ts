import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { SlotService } from 'src/modules/slot/slot.service';
import { PrismaModule } from 'src/connections/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BookingsController],
  providers: [BookingsService, SlotService],
})
export class BookingsModule {}
