import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleDayController } from './schedule-day.controller';

describe('ScheduleDayController', () => {
  let controller: ScheduleDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleDayController],
    }).compile();

    controller = module.get<ScheduleDayController>(ScheduleDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
