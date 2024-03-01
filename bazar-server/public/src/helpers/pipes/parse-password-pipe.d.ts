import { PipeTransform } from '@nestjs/common';
export declare class ParsePasswordPipe implements PipeTransform {
    transform(dto: any): Promise<any>;
}
