import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ScheduleDay, Slot } from '@prisma/client';
import { addMinutes } from 'date-fns';
import { PrismaService } from 'src/connections/prisma/prisma.service';

@Injectable()
export class SlotService {
  constructor(private readonly prisma: PrismaService) {}

  async createDaySlots(scheduleDay: ScheduleDay) {
    const existingSlots = await this.prisma.slot.findMany({
      where: {
        scheduleDayId: scheduleDay.id,
      },
    });

    if (existingSlots.length > 0) {
      throw new BadRequestException(
        'Cannot create slots: Schedule day already have existing slots',
      );
    }

    const { startTime, endTime } = scheduleDay;

    const slotsToCreate = [];
    const LIMIT_SLOTS_HALF_HOUR = 20;
    const LIMIT_SLOTS_TEN_MINUTES = 7;
    const finishTime = new Date(endTime);
    let currentTime = new Date(startTime);

    while (currentTime < finishTime) {
      const currentHalfSlots: Omit<Slot, 'id'>[] = [];

      while (currentHalfSlots.length < LIMIT_SLOTS_HALF_HOUR) {
        currentHalfSlots.push({
          scheduleDayId: scheduleDay.id,
          startTime: currentTime,
          endTime: addMinutes(currentTime, 10),
        });

        const slotsInCurrentTime = currentHalfSlots.filter(
          (slot) => slot.startTime === currentTime,
        );

        const hasExpiredSlotsInCurrentTime =
          slotsInCurrentTime.length === LIMIT_SLOTS_TEN_MINUTES;

        const hasExpiredSlotsInCurrentHalf =
          currentHalfSlots.length === LIMIT_SLOTS_HALF_HOUR;

        if (hasExpiredSlotsInCurrentTime || hasExpiredSlotsInCurrentHalf) {
          currentTime = addMinutes(currentTime, 10);
        }
      }

      slotsToCreate.push(...currentHalfSlots);
    }

    return await this.prisma.slot.createMany({
      data: slotsToCreate,
    });
  }

  async getSlotsAvailableByScheduleDay(scheduleDayId: string) {
    const slots = await this.prisma.slot.findMany({
      where: {
        scheduleDayId: scheduleDayId,
        bookings: {
          none: {},
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });

    const groupedSlots: { startTime: string; count: number }[] = [];
    slots.forEach((slot) => {
      const groupSlot = groupedSlots.find(
        (groupedSlot) => groupedSlot.startTime === slot.startTime.toISOString(),
      );

      if (groupSlot) {
        groupSlot.count += 1;
      } else {
        groupedSlots.push({
          startTime: slot.startTime.toISOString(),
          count: 1,
        });
      }
    });

    return groupedSlots;
  }

  async pickSlot(startTime: Date) {
    return await this.prisma.slot
      .findFirstOrThrow({
        where: {
          startTime,
          bookings: {
            none: {},
          },
        },
      })
      .catch(() => {
        throw new NotFoundException({
          message: 'Não existem mais vagas livres para o horário escolhido',
        });
      });
  }
}
