import { PipeTransform } from '@nestjs/common';
export declare class ParseDatePipe implements PipeTransform<string, Date> {
    transform(value: string): Date;
}
