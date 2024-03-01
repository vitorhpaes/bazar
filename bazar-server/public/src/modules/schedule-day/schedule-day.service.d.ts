import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateScheduleDayDto } from 'src/modules/schedule-day/dto/create-schedule-day.dto';
import { SlotService } from 'src/modules/slot/slot.service';
export declare class ScheduleDayService {
    private readonly prisma;
    private readonly slots;
    constructor(prisma: PrismaService, slots: SlotService);
    create(scheduleDayDTO: CreateScheduleDayDto): Promise<{
        slotCount: number;
        id: string;
        date: Date;
        startTime: Date;
        endTime: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getScheduleAvailableDays(): Promise<Date[]>;
}
