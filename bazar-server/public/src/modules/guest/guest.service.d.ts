import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateGuestDto } from 'src/modules/guest/dto/create.guest.dto';
import { BookingsService } from 'src/modules/bookings/bookings.service';
export declare class GuestService {
    private readonly prisma;
    private readonly booking;
    constructor(prisma: PrismaService, booking: BookingsService);
    create(newGuest: CreateGuestDto): Promise<{
        id: string;
        name: string;
        document: string;
        birthDate: Date;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByDocument(document: string): import(".prisma/client").Prisma.Prisma__GuestClient<{
        id: string;
        name: string;
        document: string;
        birthDate: Date;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByPhoneNumber(phoneNumber: string): import(".prisma/client").Prisma.Prisma__GuestClient<{
        id: string;
        name: string;
        document: string;
        birthDate: Date;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
