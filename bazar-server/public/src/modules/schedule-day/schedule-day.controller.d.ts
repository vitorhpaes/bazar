import { ScheduleDayService } from 'src/modules/schedule-day/schedule-day.service';
import { SlotService } from 'src/modules/slot/slot.service';
import { CreateScheduleDayDto } from './dto/create-schedule-day.dto';
export declare class ScheduleDayController {
    private readonly scheduleDayService;
    private readonly slotsService;
    constructor(scheduleDayService: ScheduleDayService, slotsService: SlotService);
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
    getAvailableSlots(date: Date): Promise<{
        startTime: string;
        count: number;
    }[]>;
}
