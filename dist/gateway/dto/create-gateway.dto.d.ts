import { CreateDeviceDto } from './create-device.dto';
export declare class CreateGatewayDto {
    _id?: string;
    serialNumber: string;
    name: string;
    ipv4: string;
    devices: CreateDeviceDto[];
}
