import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

function validatePhone(phone: string): boolean {
  const phonePattern = /^\d{11}$/;
  return phonePattern.test(phone);
}

@ValidatorConstraint({ async: false })
export class IsPhoneConstraint implements ValidatorConstraintInterface {
  validate(phone: string) {
    return validatePhone(phone);
  }

  defaultMessage(args: ValidationArguments) {
    return args.constraints[0] || 'Invalid phone number';
  }
}

export function IsPhone(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [validationOptions?.message],
      validator: IsPhoneConstraint,
    });
  };
}
