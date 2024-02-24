import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateScheduleDayDto } from 'src/modules/schedule-day/dto/create-schedule-day.dto';
import { SlotService } from 'src/modules/slot/slot.service';

@Injectable()
export class ScheduleDayService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly slots: SlotService,
  ) {}

  async create(scheduleDayDTO: CreateScheduleDayDto) {
    const scheduleDay = await this.prisma.scheduleDay.create({
      data: scheduleDayDTO,
    });

    const slots = await this.slots.createDaySlots(scheduleDay);

    return {
      ...scheduleDay,
      slotCount: slots.count,
    };
  }

  async getScheduleDaysAvailable() {
    const scheduleDay = await this.prisma.scheduleDay.findMany({
      where: {
        slots: {
          some: {
            bookings: {
              none: {},
            },
          },
        },
      },
    });

    return scheduleDay;
  }
}
