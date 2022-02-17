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
exports.GatewaySchema = exports.Gateway = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const device_schema_1 = require("./device.schema");
let Gateway = class Gateway {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Gateway.prototype, "serialNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gateway.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gateway.prototype, "ipv4", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [device_schema_1.DeviceSchema] }),
    __metadata("design:type", Array)
], Gateway.prototype, "devices", void 0);
Gateway = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Gateway);
exports.Gateway = Gateway;
exports.GatewaySchema = mongoose_1.SchemaFactory.createForClass(Gateway);
//# sourceMappingURL=gateway.schema.js.map