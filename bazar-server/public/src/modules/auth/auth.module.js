"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_strategy_1 = require("./../../helpers/strategies/jwt-strategy");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const prisma_module_1 = require("../../connections/prisma/prisma.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../user/user.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.AUTH_SECRET,
                signOptions: { expiresIn: '604800s' },
            }),
            prisma_module_1.PrismaModule,
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, user_service_1.UserService],
        controllers: [auth_controller_1.AuthController],
        exports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map