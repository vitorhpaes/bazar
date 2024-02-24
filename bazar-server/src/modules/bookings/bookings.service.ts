import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';
import { SlotService } from 'src/modules/slot/slot.service';

@Injectable()
export class BookingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly slot: SlotService,
  ) {}

  async book(startDate: Date, guestId: string) {
    const slot = await this.slot.pickSlot(startDate);

    const guestBookings = await this.findByGuestId(guestId);

    if (guestBookings.length > 0) {
      throw new BadRequestException({
        data: guestBookings,
        message: 'Já existe um horário marcado para este usuário',
      });
    }

    return await this.prisma.booking.create({
      data: {
        slotId: slot.id,
        guestId,
      },
    });
  }

  async findByGuestId(guestId: string) {
    return this.prisma.booking.findMany({
      where: {
        guestId,
      },
    });
  }
}
