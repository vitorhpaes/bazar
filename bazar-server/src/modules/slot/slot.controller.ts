import { Controller } from '@nestjs/common';
import { SlotService } from 'src/modules/slot/slot.service';

@Controller('slot')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}
}
