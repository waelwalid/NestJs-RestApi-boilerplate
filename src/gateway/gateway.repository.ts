import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model, ObjectId } from "mongoose";
import { Device } from './schemas/device.schema';
import { Gateway, GatewayDocument } from "./schemas/gateway.schema";

@Injectable()
export class GatewayRepository {
    constructor(
        @InjectModel(Gateway.name) private GatewayModel: Model<GatewayDocument>
    ) { }

    async findById(id: ObjectId): Promise<Gateway> {
        return this.GatewayModel.findById(id);
    }

    async find(GatewaysFilterQuery: FilterQuery<Gateway>): Promise<Gateway[]> {
        return this.GatewayModel.find(GatewaysFilterQuery) || [];
    }

    async create(gateway: Gateway): Promise<Gateway> {
        return this.GatewayModel.create<Gateway>(gateway);
    }

    async findOneAndUpdate(GatewayFilterQuery: FilterQuery<Gateway>, Gateway: Partial<Gateway>): Promise<Gateway> {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, Gateway, { new: true });
    }

    async findOneAndDelete(GatewayFilterQuery: FilterQuery<Gateway>): Promise<Gateway> {
        return this.GatewayModel.findByIdAndDelete(GatewayFilterQuery);
    }

    async findOneAndUpdateNested(GatewayFilterQuery: FilterQuery<Gateway>, Device: Device): Promise<Gateway> {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, {
            $addToSet: { "devices": Device }
        }, { new: true });
    }

    async findOneAndDeleteNested(GatewayFilterQuery: FilterQuery<Gateway>, DeviceFilterQuery: FilterQuery<Device>): Promise<Gateway> {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, {
            $pull: { "devices": DeviceFilterQuery }
        }, { new: true });
    }

    async countDevices(GatewayFilterQuery: FilterQuery<Gateway>): Promise<any> {
        const countDevices = await this.GatewayModel.aggregate([{ $match: GatewayFilterQuery }, { $project: { deviceCount: { $size: "$devices" } } }]);
        return (countDevices?.length) ? countDevices[0].deviceCount : 0;
    }

    async isDeviceExist(gatewayId: ObjectId, deviceUid: number): Promise<boolean> {
        const device = await this.GatewayModel.findOne({ _id: gatewayId, "devices.uid": deviceUid });
        return device != null;
    }

}