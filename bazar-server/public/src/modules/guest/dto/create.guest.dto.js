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
exports.CreateGuestDto = void 0;
const class_validator_1 = require("class-validator");
const isCpf_decorator_1 = require("../../../decorators/isCpf.decorator");
const isPhone_decorator_1 = require("../../../decorators/isPhone.decorator");
class CreateGuestDto {
}
exports.CreateGuestDto = CreateGuestDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O atributo 'name' deve ser informado" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O atributo 'document' deve ser informado" }),
    (0, isCpf_decorator_1.IsCpf)(),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O atributo 'birthDate' deve ser informado" }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateGuestDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O atributo 'phoneNumber' deve ser informado" }),
    (0, isPhone_decorator_1.IsPhone)(),
    __metadata("design:type", String)
], CreateGuestDto.prototype, "phoneNumber", void 0);
//# sourceMappingURL=create.guest.dto.js.map