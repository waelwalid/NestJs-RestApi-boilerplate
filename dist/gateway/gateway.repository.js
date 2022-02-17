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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gateway_schema_1 = require("./schemas/gateway.schema");
let GatewayRepository = class GatewayRepository {
    constructor(GatewayModel) {
        this.GatewayModel = GatewayModel;
    }
    async findById(id) {
        return this.GatewayModel.findById(id);
    }
    async find(GatewaysFilterQuery) {
        return this.GatewayModel.find(GatewaysFilterQuery) || [];
    }
    async create(gateway) {
        return this.GatewayModel.create(gateway);
    }
    async findOneAndUpdate(GatewayFilterQuery, Gateway) {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, Gateway, { new: true });
    }
    async findOneAndDelete(GatewayFilterQuery) {
        return this.GatewayModel.findByIdAndDelete(GatewayFilterQuery);
    }
    async findOneAndUpdateNested(GatewayFilterQuery, Device) {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, {
            $addToSet: { "devices": Device }
        }, { new: true });
    }
    async findOneAndDeleteNested(GatewayFilterQuery, DeviceFilterQuery) {
        return this.GatewayModel.findOneAndUpdate(GatewayFilterQuery, {
            $pull: { "devices": DeviceFilterQuery }
        }, { new: true });
    }
    async countDevices(GatewayFilterQuery) {
        const countDevices = await this.GatewayModel.aggregate([{ $match: GatewayFilterQuery }, { $project: { deviceCount: { $size: "$devices" } } }]);
        return (countDevices === null || countDevices === void 0 ? void 0 : countDevices.length) ? countDevices[0].deviceCount : 0;
    }
    async isDeviceExist(gatewayId, deviceUid) {
        const device = await this.GatewayModel.findOne({ _id: gatewayId, "devices.uid": deviceUid });
        return device != null;
    }
};
GatewayRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gateway_schema_1.Gateway.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GatewayRepository);
exports.GatewayRepository = GatewayRepository;
//# sourceMappingURL=gateway.repository.js.map