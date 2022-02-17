import { deviceStatus } from '../schemas/device.schema';
import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsOptional,
    IsIn,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {

    @ApiProperty({
        description: `Number UID as unique device id`,
        example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    uid: number;

    @ApiProperty({
        description: `string vendor as a device name`,
        example: `vendor name`,
    })
    @IsNotEmpty()
    @IsString()
    vendor: string;

    @ApiProperty({
        description: `string status can be ONLINE/OFFLINE`,
        example: `ONLINE`,
    })
    @IsOptional()
    @IsString()
    @IsIn(deviceStatus)	
    status: string;
}