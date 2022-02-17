import {
    IsMongoId, IsNotEmpty, IsNumber, IsOptional
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class GatewayQueryParams {
    @IsMongoId()
    @IsNotEmpty()
    id: ObjectId

    @IsOptional()
    @IsNumber()
    deviceId?: number
}


