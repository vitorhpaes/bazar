import { ServeStaticModule } from '@nestjs/serve-static';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ScheduleDayModule } from './schedule-day/schedule-day.module';
import { SlotModule } from 'src/modules/slot/slot.module';
import { BookingsModule } from './bookings/bookings.module';
import { GuestModule } from './guest/guest.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from 'src/helpers/guard/jwt-auth-guard';
import { APP_GUARD } from '@nestjs/core';

import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'public'),
    }),
    EventsModule,
    ScheduleDayModule,
    SlotModule,
    BookingsModule,
    GuestModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
