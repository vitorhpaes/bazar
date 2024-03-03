import { PrismaClient } from '@prisma/client';
import { DateTime } from 'luxon';

import { busyHours } from './busy-hours.data';

const BUSY_HOURS_DAY = '2024-03-09';

async function createExistingBookings(prisma: PrismaClient) {
  let mockedGuest = await prisma.guest.findFirst({
    where: {
      document: '000.000.000-00',
    },
  });

  if (!mockedGuest) {
    mockedGuest = await prisma.guest.create({
      data: {
        name: 'Usuário predefinido',
        document: '000.000.000-00',
        phoneNumber: '00000000000',
        birthDate: new Date('1999-12-15'),
      },
    });
  }

  const guestId = mockedGuest.id; // Substitua pelo ID de um guest mockado
  const acceptedTerms = true;

  console.log({ busyHours: busyHours.length });

  for (const hour of busyHours) {
    const [hours, minutes] = hour.split(':').map(Number);
    const startDate = DateTime.fromObject(
      {
        year: parseInt(BUSY_HOURS_DAY.split('-')[0]),
        month: parseInt(BUSY_HOURS_DAY.split('-')[1]),
        day: parseInt(BUSY_HOURS_DAY.split('-')[2]),
        hour: hours,
        minute: minutes,
      },
      { zone: 'America/Sao_Paulo' },
    );
    const slot = await prisma.slot.findFirst({
      where: {
        startTime: startDate.toJSDate(),
        bookings: {
          none: {},
        },
      },
    });

    if (!slot) {
      console.log('NOT FOUND SLOT TO TIME: ', startDate.toJSDate());
    }

    const booking = await prisma.booking.create({
      data: {
        acceptedTerms,
        guestId,
        slotId: slot.id,
      },
    });
    console.log('Reserva criada com sucesso:', booking.id);
  }
}

export default createExistingBookings;
