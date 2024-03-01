"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCpf = exports.IsCpfConstraint = void 0;
const class_validator_1 = require("class-validator");
function validateCPF(cpf) {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfPattern.test(cpf);
}
let IsCpfConstraint = class IsCpfConstraint {
    validate(cpf) {
        return validateCPF(cpf);
    }
    defaultMessage(args) {
        return args.constraints[0] || 'Invalid CPF';
    }
};
exports.IsCpfConstraint = IsCpfConstraint;
exports.IsCpfConstraint = IsCpfConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsCpfConstraint);
function IsCpf(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [validationOptions?.message],
            validator: IsCpfConstraint,
        });
    };
}
exports.IsCpf = IsCpf;
//# sourceMappingURL=isCpf.decorator.js.map