import { PrismaService } from 'src/connections/prisma/prisma.service';
import { SlotService } from 'src/modules/slot/slot.service';
export declare class BookingsService {
    private readonly prisma;
    private readonly slot;
    constructor(prisma: PrismaService, slot: SlotService);
    book(startDate: Date, guestId: string, acceptedTerms: boolean): Promise<{
        slot: {
            id: string;
            startTime: Date;
            endTime: Date;
            scheduleDayId: string;
        };
    } & {
        id: string;
        guestId: string;
        slotId: string;
        acceptedTerms: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByGuestId(guestId: string): Promise<{
        id: string;
        guestId: string;
        slotId: string;
        acceptedTerms: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
