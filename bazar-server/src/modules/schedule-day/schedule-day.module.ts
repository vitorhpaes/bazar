import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/connections/prisma/prisma.module';
import { ScheduleDayController } from './schedule-day.controller';
import { ScheduleDayService } from './schedule-day.service';
import { SlotService } from 'src/modules/slot/slot.service';

@Module({
  imports: [PrismaModule],
  controllers: [ScheduleDayController],
  providers: [ScheduleDayService, SlotService],
})
export class ScheduleDayModule {}
