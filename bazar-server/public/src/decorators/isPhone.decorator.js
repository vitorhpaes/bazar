"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPhone = exports.IsPhoneConstraint = void 0;
const class_validator_1 = require("class-validator");
function validatePhone(phone) {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
}
let IsPhoneConstraint = class IsPhoneConstraint {
    validate(phone) {
        return validatePhone(phone);
    }
    defaultMessage(args) {
        return args.constraints[0] || 'Invalid phone number';
    }
};
exports.IsPhoneConstraint = IsPhoneConstraint;
exports.IsPhoneConstraint = IsPhoneConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsPhoneConstraint);
function IsPhone(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [validationOptions?.message],
            validator: IsPhoneConstraint,
        });
    };
}
exports.IsPhone = IsPhone;
//# sourceMappingURL=isPhone.decorator.js.map