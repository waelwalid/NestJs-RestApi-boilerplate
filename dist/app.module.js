"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const gateway_module_1 = require("./gateway/gateway.module");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const exception_filter_1 = require("./exceptions/exception.filter");
const bad_exception_filter_1 = require("./exceptions/bad-exception.filter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            gateway_module_1.GatewayModule,
            mongoose_1.MongooseModule.forRoot('mongodb://root_user:root_pass@172.16.238.3:27017/gateway_db')
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.ExceptionsFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: bad_exception_filter_1.BadRequestExceptionFilter,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map