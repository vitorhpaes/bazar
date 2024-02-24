import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { ScheduleDayService } from 'src/modules/schedule-day/schedule-day.service';
import { SlotService } from 'src/modules/slot/slot.service';
import { CreateScheduleDayDto } from './dto/create-schedule-day.dto';

@Controller('schedule-day')
export class ScheduleDayController {
  constructor(
    private readonly scheduleDayService: ScheduleDayService,
    private readonly slotsService: SlotService,
  ) {}

  @Post()
  create(@Body() scheduleDayDTO: CreateScheduleDayDto) {
    return this.scheduleDayService.create(scheduleDayDTO);
  }

  @Get('/available')
  getScheduleDaysAvailable() {
    return this.scheduleDayService.getScheduleDaysAvailable();
  }

  @Get('/:scheduleDayId/slots/available')
  getSlotsAvailable(@Param('scheduleDayId') scheduleDayId: string) {
    return this.slotsService.getSlotsAvailableByScheduleDay(scheduleDayId);
  }
}