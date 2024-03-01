import { GuestService } from 'src/modules/guest/guest.service';
import { CreateGuestDto } from 'src/modules/guest/dto/create.guest.dto';
export declare class GuestController {
    private readonly guest;
    constructor(guest: GuestService);
    create(newGuest: CreateGuestDto): Promise<{
        id: string;
        name: string;
        document: string;
        birthDate: Date;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
