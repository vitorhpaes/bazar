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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../connections/prisma/prisma.service");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userDto) {
        return await this.prisma.user.create({
            data: {
                ...userDto,
                password: await bcrypt.hash(userDto.password, 12),
            },
        });
    }
    async getByUsername(username) {
        return await this.prisma.user.findFirst({
            where: {
                username,
            },
        });
    }
    async validatePassword(username, password) {
        const user = await this.prisma.user.findFirstOrThrow({
            where: {
                username,
            },
        });
        const isValidPassword = await bcrypt.compare(password, user.password);
        return isValidPassword;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map