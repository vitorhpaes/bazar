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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../connections/prisma/prisma.service");
const slot_service_1 = require("../slot/slot.service");
let BookingsService = class BookingsService {
    constructor(prisma, slot) {
        this.prisma = prisma;
        this.slot = slot;
    }
    async book(startDate, guestId, acceptedTerms) {
        const slot = await this.slot.pickSlot(startDate);
        const guestBookings = await this.findByGuestId(guestId);
        if (guestBookings.length > 0) {
            throw new common_1.BadRequestException({
                data: guestBookings,
                message: 'Já existe um horário marcado para este usuário',
            });
        }
        if (!acceptedTerms) {
            throw new common_1.BadRequestException({
                message: 'Precisa aceitar os termos de uso',
            });
        }
        return await this.prisma.booking.create({
            data: {
                slotId: slot.id,
                guestId,
                acceptedTerms,
            },
            include: {
                slot: true,
            },
        });
    }
    async findByGuestId(guestId) {
        return this.prisma.booking.findMany({
            where: {
                guestId,
            },
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        slot_service_1.SlotService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map