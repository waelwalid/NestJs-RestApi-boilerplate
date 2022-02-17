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
exports.GatewayController = void 0;
const common_1 = require("@nestjs/common");
const gateway_service_1 = require("./gateway.service");
const create_gateway_dto_1 = require("./dto/create-gateway.dto");
const update_gateway_dto_1 = require("./dto/update-gateway.dto");
const gateway_query_params_dto_1 = require("./dto/gateway-query-params.dto");
const create_device_dto_1 = require("./dto/create-device.dto");
let GatewayController = class GatewayController {
    constructor(gatewayService) {
        this.gatewayService = gatewayService;
    }
    create(createGatewayDto) {
        return this.gatewayService.create(createGatewayDto);
    }
    findAll() {
        return this.gatewayService.findAll();
    }
    findById(params) {
        return this.gatewayService.findById(params.id);
    }
    update(params, updateGatewayDto) {
        return this.gatewayService.update(params.id, updateGatewayDto);
    }
    remove(params) {
        return this.gatewayService.remove(params.id);
    }
    createDevice(params, createDeviceDto) {
        return this.gatewayService.createDevice(params.id, createDeviceDto);
    }
    removeDevice(params) {
        return this.gatewayService.removeDevice(params.id, params.deviceId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gateway_dto_1.CreateGatewayDto]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gateway_query_params_dto_1.GatewayQueryParams]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gateway_query_params_dto_1.GatewayQueryParams, update_gateway_dto_1.UpdateGatewayDto]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gateway_query_params_dto_1.GatewayQueryParams]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/device'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gateway_query_params_dto_1.GatewayQueryParams, create_device_dto_1.CreateDeviceDto]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createDevice", null);
__decorate([
    (0, common_1.Delete)(':id/device/:deviceId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gateway_query_params_dto_1.GatewayQueryParams]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "removeDevice", null);
GatewayController = __decorate([
    (0, common_1.Controller)('gateway'),
    __metadata("design:paramtypes", [gateway_service_1.GatewayService])
], GatewayController);
exports.GatewayController = GatewayController;
//# sourceMappingURL=gateway.controller.js.map