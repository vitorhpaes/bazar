import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';
import { SlotService } from 'src/modules/slot/slot.service';

@Injectable()
export class BookingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly slot: SlotService,
  ) {}

  async book(startDate: Date, guestId: string, acceptedTerms: boolean) {
    const slot = await this.slot.pickSlot(startDate);
    console.log({ slot, startDate });
    const guestBookings = await this.findByGuestId(guestId);

    return;

    if (guestBookings.length > 0) {
      throw new BadRequestException({
        data: guestBookings,
        message: 'Já existe um horário marcado para este usuário',
      });
    }

    if (!acceptedTerms) {
      throw new BadRequestException({
        message: 'Precisa aceitar os termos de uso',
      });
    }

    return await this.prisma.booking.create({
      data: {
        slotId: slot.id,
        guestId,
        acceptedTerms,
      },
      include: {
        slot: true,
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
