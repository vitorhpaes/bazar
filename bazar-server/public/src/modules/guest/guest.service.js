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
exports.GuestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../connections/prisma/prisma.service");
const bookings_service_1 = require("../bookings/bookings.service");
let GuestService = class GuestService {
    constructor(prisma, booking) {
        this.prisma = prisma;
        this.booking = booking;
    }
    async create(newGuest) {
        const guestWithSameDocument = await this.findByDocument(newGuest.document);
        const guestWithSamePhoneNumber = await this.findByDocument(newGuest.phoneNumber);
        const duplicatedGuest = guestWithSameDocument ?? guestWithSamePhoneNumber;
        if (!duplicatedGuest) {
            return await this.prisma.guest.create({
                data: newGuest,
            });
        }
        const duplicatedGuestBookings = await this.booking.findByGuestId(guestWithSameDocument.id);
        if (duplicatedGuestBookings.length > 0) {
            throw new common_1.BadRequestException({
                message: 'Já existe um agendamento para um visitante com o mesmo documento ou número de telefone.',
            });
        }
        else {
            await this.prisma.guest.delete({
                where: {
                    id: guestWithSameDocument.id,
                },
            });
        }
        return await this.prisma.guest.create({
            data: newGuest,
        });
    }
    findByDocument(document) {
        return this.prisma.guest.findFirst({
            where: {
                document,
            },
        });
    }
    findByPhoneNumber(phoneNumber) {
        return this.prisma.guest.findFirst({
            where: {
                phoneNumber,
            },
        });
    }
};
exports.GuestService = GuestService;
exports.GuestService = GuestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bookings_service_1.BookingsService])
], GuestService);
//# sourceMappingURL=guest.service.js.map