"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../connections/prisma/prisma.service");
const slot_service_1 = require("../slot/slot.service");
let ScheduleDayService = class ScheduleDayService {
    constructor(prisma, slots) {
        this.prisma = prisma;
        this.slots = slots;
    }
    async create(scheduleDayDTO) {
        const scheduleDay = await this.prisma.scheduleDay.create({
            data: scheduleDayDTO,
        });
        const slots = await this.slots.createDaySlots(scheduleDay);
        return {
            ...scheduleDay,
            slotCount: slots.count,
        };
    }
    async getScheduleAvailableDays() {
        const availableDays = await this.prisma.scheduleDay.findMany({
            where: {
                AND: [
                    {
                        endTime: {
                            gt: new Date(),
                        },
                    },
                    {
                        slots: {
                            some: {
                                bookings: {
                                    none: {},
                                },
                            },
                        },
                    },
                ],
            },
        });
        const groupedByDate = [];
        availableDays.forEach((day) => {
            const alreadyExists = !!groupedByDate.find((existingDate) => day.date.toISOString() === existingDate.toISOString());
            if (alreadyExists)
                return;
            groupedByDate.push(day.date);
        });
        return groupedByDate;
    }
};
exports.ScheduleDayService = ScheduleDayService;
exports.ScheduleDayService = ScheduleDayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        slot_service_1.SlotService])
], ScheduleDayService);
//# sourceMappingURL=schedule-day.service.js.map