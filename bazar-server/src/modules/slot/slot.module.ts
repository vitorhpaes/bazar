import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/connections/prisma/prisma.module';
import { SlotController } from 'src/modules/slot/slot.controller';
import { SlotService } from 'src/modules/slot/slot.service';

@Module({
  imports: [PrismaModule],
  controllers: [SlotController],
  providers: [SlotService],
})
export class SlotModule {}
