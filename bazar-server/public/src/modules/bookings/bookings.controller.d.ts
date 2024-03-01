import { BookingsService } from 'src/modules/bookings/bookings.service';
import { CreateBookingDto } from 'src/modules/bookings/dto/create.booking.dto';
export declare class BookingsController {
    private readonly booking;
    constructor(booking: BookingsService);
    book({ startTime, guestId, acceptedTerms }: CreateBookingDto): Promise<{
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
}
