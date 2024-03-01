import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsPhoneConstraint implements ValidatorConstraintInterface {
    validate(phone: string): boolean;
    defaultMessage(args: ValidationArguments): any;
}
export declare function IsPhone(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
