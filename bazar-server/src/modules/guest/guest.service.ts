import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateGuestDto } from 'src/modules/guest/dto/create.guest.dto';
import { BookingsService } from 'src/modules/bookings/bookings.service';

@Injectable()
export class GuestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly booking: BookingsService,
  ) {}

  async create(newGuest: CreateGuestDto) {
    const guestWithSameDocument = await this.findByDocument(newGuest.document);
    const guestWithSamePhoneNumber = await this.findByDocument(
      newGuest.phoneNumber,
    );

    const duplicatedGuest = guestWithSameDocument ?? guestWithSamePhoneNumber;

    if (!duplicatedGuest) {
      return await this.prisma.guest.create({
        data: newGuest,
      });
    }

    const duplicatedGuestBookings = await this.booking.findByGuestId(
      guestWithSameDocument.id,
    );

    if (duplicatedGuestBookings.length > 0) {
      throw new BadRequestException({
        message:
          'Já existe um agendamento para um visitante com o mesmo documento ou número de telefone.',
      });
    } else {
      await this.prisma.guest.delete({
        where: {
          id: guestWithSameDocument.id,
        },
      });
    }

    return await this.prisma.guest.create({
      data: newGuest,
    });
  }

  findByDocument(document: string) {
    return this.prisma.guest.findFirst({
      where: {
        document,
      },
    });
  }

  findByPhoneNumber(phoneNumber: string) {
    return this.prisma.guest.findFirst({
      where: {
        phoneNumber,
      },
    });
  }
}
