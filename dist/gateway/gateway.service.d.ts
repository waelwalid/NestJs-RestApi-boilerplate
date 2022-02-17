import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayRepository } from './gateway.repository';
import { ObjectId } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
export declare class GatewayService {
    private readonly gatewayRepository;
    constructor(gatewayRepository: GatewayRepository);
    create(createGatewayDto: CreateGatewayDto): Promise<import("./schemas/gateway.schema").Gateway>;
    findAll(): Promise<import("./schemas/gateway.schema").Gateway[]>;
    findById(id: ObjectId): Promise<import("./schemas/gateway.schema").Gateway>;
    update(id: ObjectId, updateGatewayDto: UpdateGatewayDto): Promise<import("./schemas/gateway.schema").Gateway>;
    remove(id: ObjectId): Promise<import("./schemas/gateway.schema").Gateway>;
    createDevice(id: ObjectId, createDeviceDto: CreateDeviceDto): Promise<import("./schemas/gateway.schema").Gateway>;
    removeDevice(id: ObjectId, deviceId: number): Promise<import("./schemas/gateway.schema").Gateway>;
}
