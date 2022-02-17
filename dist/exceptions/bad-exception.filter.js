"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let BadRequestExceptionFilter = class BadRequestExceptionFilter {
    catch(exception, host) {
        var _a;
        const context = host.switchToHttp();
        const response = context.getResponse();
        const status = exception.getStatus();
        response.status(status).json({
            code: "FAILED",
            response: exception.message,
            errors: ((_a = exception.getResponse()) === null || _a === void 0 ? void 0 : _a.message) || [],
            stack: undefined,
        });
    }
};
BadRequestExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.BadRequestException)
], BadRequestExceptionFilter);
exports.BadRequestExceptionFilter = BadRequestExceptionFilter;
//# sourceMappingURL=bad-exception.filter.js.map