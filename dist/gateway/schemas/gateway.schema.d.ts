/// <reference types="mongoose/types/PipelineStage" />
import { Document } from 'mongoose';
import { Device } from "./device.schema";
export declare type GatewayDocument = Gateway & Document;
export declare class Gateway {
    serialNumber: string;
    name: string;
    ipv4: string;
    devices: Device[];
}
export declare const GatewaySchema: import("mongoose").Schema<Document<Gateway, any, any>, import("mongoose").Model<Document<Gateway, any, any>, any, any, any>, any, any>;
