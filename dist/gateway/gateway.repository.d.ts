import { FilterQuery, Model, ObjectId } from "mongoose";
import { Device } from './schemas/device.schema';
import { Gateway, GatewayDocument } from "./schemas/gateway.schema";
export declare class GatewayRepository {
    private GatewayModel;
    constructor(GatewayModel: Model<GatewayDocument>);
    findById(id: ObjectId): Promise<Gateway>;
    find(GatewaysFilterQuery: FilterQuery<Gateway>): Promise<Gateway[]>;
    create(gateway: Gateway): Promise<Gateway>;
    findOneAndUpdate(GatewayFilterQuery: FilterQuery<Gateway>, Gateway: Partial<Gateway>): Promise<Gateway>;
    findOneAndDelete(GatewayFilterQuery: FilterQuery<Gateway>): Promise<Gateway>;
    findOneAndUpdateNested(GatewayFilterQuery: FilterQuery<Gateway>, Device: Device): Promise<Gateway>;
    findOneAndDeleteNested(GatewayFilterQuery: FilterQuery<Gateway>, DeviceFilterQuery: FilterQuery<Device>): Promise<Gateway>;
    countDevices(GatewayFilterQuery: FilterQuery<Gateway>): Promise<any>;
    isDeviceExist(gatewayId: ObjectId, deviceUid: number): Promise<boolean>;
}
