import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { GatewayQueryParams } from './dto/gateway-query-params.dto';
import { CreateDeviceDto } from './dto/create-device.dto';
export declare class GatewayController {
    private readonly gatewayService;
    constructor(gatewayService: GatewayService);
    create(createGatewayDto: CreateGatewayDto): Promise<import("./schemas/gateway.schema").Gateway>;
    findAll(): Promise<import("./schemas/gateway.schema").Gateway[]>;
    findById(params: GatewayQueryParams): Promise<import("./schemas/gateway.schema").Gateway>;
    update(params: GatewayQueryParams, updateGatewayDto: UpdateGatewayDto): Promise<import("./schemas/gateway.schema").Gateway>;
    remove(params: GatewayQueryParams): Promise<import("./schemas/gateway.schema").Gateway>;
    createDevice(params: GatewayQueryParams, createDeviceDto: CreateDeviceDto): Promise<import("./schemas/gateway.schema").Gateway>;
    removeDevice(params: GatewayQueryParams): Promise<import("./schemas/gateway.schema").Gateway>;
}
