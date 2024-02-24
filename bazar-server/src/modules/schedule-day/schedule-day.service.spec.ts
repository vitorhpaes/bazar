import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleDayService } from './schedule-day.service';

describe('ScheduleDayService', () => {
  let service: ScheduleDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleDayService],
    }).compile();

    service = module.get<ScheduleDayService>(ScheduleDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
