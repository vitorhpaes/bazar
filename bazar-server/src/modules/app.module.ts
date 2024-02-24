import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ScheduleDayModule } from './schedule-day/schedule-day.module';
import { SlotModule } from 'src/modules/slot/slot.module';
import { BookingsModule } from './bookings/bookings.module';
import { GuestModule } from './guest/guest.module';

@Module({
  imports: [
    EventsModule,
    ScheduleDayModule,
    SlotModule,
    BookingsModule,
    GuestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
