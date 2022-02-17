"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayService = void 0;
const common_1 = require("@nestjs/common");
const gateway_repository_1 = require("./gateway.repository");
const mongoose_1 = require("mongoose");
let GatewayService = class GatewayService {
    constructor(gatewayRepository) {
        this.gatewayRepository = gatewayRepository;
    }
    create(createGatewayDto) {
        return this.gatewayRepository.create(createGatewayDto);
    }
    findAll() {
        return this.gatewayRepository.find({});
    }
    findById(id) {
        return this.gatewayRepository.findById(id);
    }
    update(id, updateGatewayDto) {
        return this.gatewayRepository.findOneAndUpdate({ _id: id }, updateGatewayDto);
    }
    remove(id) {
        return this.gatewayRepository.findOneAndDelete(id);
    }
    async createDevice(id, createDeviceDto) {
        const deviceExist = await this.gatewayRepository.isDeviceExist(id, createDeviceDto.uid);
        if (deviceExist)
            throw new common_1.BadRequestException("Device {UID} already exist in this gateway!");
        const countDevices = await this.gatewayRepository.countDevices({ _id: new mongoose_1.Types.ObjectId(id.toString()) });
        if (countDevices >= 10)
            throw new common_1.BadRequestException("You cannot add more than 10 devices!");
        return this.gatewayRepository.findOneAndUpdateNested({ _id: id }, createDeviceDto);
    }
    async removeDevice(id, deviceId) {
        return this.gatewayRepository.findOneAndDeleteNested({ _id: id }, { uid: deviceId });
    }
};
GatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gateway_repository_1.GatewayRepository])
], GatewayService);
exports.GatewayService = GatewayService;
//# sourceMappingURL=gateway.service.js.map