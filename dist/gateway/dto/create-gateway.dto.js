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
exports.CreateGatewayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_device_dto_1 = require("./create-device.dto");
class CreateGatewayDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGatewayDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Unique serial number(uuid)`,
        example: `e152f810-a2eb-4ef0-a131-108f42835c88`,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateGatewayDto.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `String name`,
        example: `Gateway name`,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], CreateGatewayDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `String IPv4 for a Gatway`,
        example: `127.0.0.1`,
    }),
    (0, class_validator_1.IsIP)("4"),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGatewayDto.prototype, "ipv4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Max:10 records | Optional Nested Array of objects contains devices`,
        example: `[{
            "uid" : 10, 
            "vendor" : "microsoft",
            "status" : "ONLINE"
         }]`,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_device_dto_1.CreateDeviceDto),
    __metadata("design:type", Array)
], CreateGatewayDto.prototype, "devices", void 0);
exports.CreateGatewayDto = CreateGatewayDto;
//# sourceMappingURL=create-gateway.dto.js.map