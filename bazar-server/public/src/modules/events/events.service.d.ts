import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
export declare class EventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEventDto: CreateEventDto): Promise<{
        id: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
