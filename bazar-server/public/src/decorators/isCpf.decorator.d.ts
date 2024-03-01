import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsCpfConstraint implements ValidatorConstraintInterface {
    validate(cpf: string): boolean;
    defaultMessage(args: ValidationArguments): any;
}
export declare function IsCpf(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
