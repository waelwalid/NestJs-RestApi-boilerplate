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
exports.CreateDeviceDto = void 0;
const device_schema_1 = require("../schemas/device.schema");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDeviceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Number UID as unique device id`,
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDeviceDto.prototype, "uid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `string vendor as a device name`,
        example: `vendor name`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "vendor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `string status can be ONLINE/OFFLINE`,
        example: `ONLINE`,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(device_schema_1.deviceStatus),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "status", void 0);
exports.CreateDeviceDto = CreateDeviceDto;
//# sourceMappingURL=create-device.dto.js.map