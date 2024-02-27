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

  async getScheduleAvailableDays() {
    const availableDays = await this.prisma.scheduleDay.findMany({
      where: {
        AND: [
          {
            endTime: {
              gt: new Date(),
            },
          },
          {
            slots: {
              some: {
                bookings: {
                  none: {},
                },
              },
            },
          },
        ],
      },
    });

    const groupedByDate: Date[] = [];
    availableDays.forEach((day) => {
      const alreadyExists = !!groupedByDate.find(
        (existingDate) => day.date.toISOString() === existingDate.toISOString(),
      );

      if (alreadyExists) return;
      groupedByDate.push(day.date);
    });

    return groupedByDate;
  }
}
