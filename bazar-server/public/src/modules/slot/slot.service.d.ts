import { ScheduleDay } from '@prisma/client';
import { PrismaService } from 'src/connections/prisma/prisma.service';
export declare class SlotService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createDaySlots(scheduleDay: ScheduleDay): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getAvailableSlots(date: Date): Promise<{
        startTime: string;
        count: number;
    }[]>;
    pickSlot(startTime: Date): Promise<{
        id: string;
        startTime: Date;
        endTime: Date;
        scheduleDayId: string;
    }>;
}
