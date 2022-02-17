/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose" />
export declare const deviceStatus: string[];
export declare class Device {
    uid: number;
    vendor: string;
    status: string;
}
export declare const DeviceSchema: import("mongoose").Schema<import("mongoose").Document<Device, any, any>, import("mongoose").Model<import("mongoose").Document<Device, any, any>, any, any, any>, any, any>;
