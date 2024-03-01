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
exports.SlotService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const prisma_service_1 = require("../../connections/prisma/prisma.service");
let SlotService = class SlotService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createDaySlots(scheduleDay) {
        const existingSlots = await this.prisma.slot.findMany({
            where: {
                scheduleDayId: scheduleDay.id,
            },
        });
        if (existingSlots.length > 0) {
            throw new common_1.BadRequestException('Cannot create slots: Schedule day already have existing slots');
        }
        const { startTime, endTime } = scheduleDay;
        const slotsToCreate = [];
        const LIMIT_SLOTS_HALF_HOUR = 20;
        const LIMIT_SLOTS_TEN_MINUTES = 7;
        const finishTime = new Date(endTime);
        let currentTime = new Date(startTime);
        while (currentTime < finishTime) {
            const currentHalfSlots = [];
            while (currentHalfSlots.length < LIMIT_SLOTS_HALF_HOUR) {
                currentHalfSlots.push({
                    scheduleDayId: scheduleDay.id,
                    startTime: currentTime,
                    endTime: (0, date_fns_1.addMinutes)(currentTime, 10),
                });
                const slotsInCurrentTime = currentHalfSlots.filter((slot) => slot.startTime === currentTime);
                const hasExpiredSlotsInCurrentTime = slotsInCurrentTime.length === LIMIT_SLOTS_TEN_MINUTES;
                const hasExpiredSlotsInCurrentHalf = currentHalfSlots.length === LIMIT_SLOTS_HALF_HOUR;
                if (hasExpiredSlotsInCurrentTime || hasExpiredSlotsInCurrentHalf) {
                    currentTime = (0, date_fns_1.addMinutes)(currentTime, 10);
                }
            }
            slotsToCreate.push(...currentHalfSlots);
        }
        return await this.prisma.slot.createMany({
            data: slotsToCreate,
        });
    }
    async getAvailableSlots(date) {
        const startOfDay = new Date(date);
        startOfDay.setUTCHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setUTCHours(23, 59, 59, 999);
        const slots = await this.prisma.slot.findMany({
            where: {
                AND: [
                    {
                        startTime: {
                            gte: startOfDay,
                            lte: endOfDay,
                        },
                    },
                    {
                        bookings: {
                            none: {},
                        },
                    },
                ],
            },
            orderBy: {
                startTime: 'asc',
            },
        });
        const groupedSlots = [];
        slots.forEach((slot) => {
            const groupSlot = groupedSlots.find((groupedSlot) => groupedSlot.startTime === slot.startTime.toISOString());
            if (groupSlot) {
                groupSlot.count += 1;
            }
            else {
                groupedSlots.push({
                    startTime: slot.startTime.toISOString(),
                    count: 1,
                });
            }
        });
        return groupedSlots;
    }
    async pickSlot(startTime) {
        return await this.prisma.slot
            .findFirstOrThrow({
            where: {
                startTime,
                bookings: {
                    none: {},
                },
            },
        })
            .catch(() => {
            throw new common_1.NotFoundException({
                message: 'Não existem vagas livres para o horário escolhido',
            });
        });
    }
};
exports.SlotService = SlotService;
exports.SlotService = SlotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SlotService);
//# sourceMappingURL=slot.service.js.map