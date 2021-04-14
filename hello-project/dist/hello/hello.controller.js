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
exports.HelloController = void 0;
const hello_service_1 = require("./hello.service");
const common_1 = require("@nestjs/common");
const person_dto_1 = require("./dto/person.dto");
const swagger_1 = require("@nestjs/swagger");
let HelloController = class HelloController {
    constructor(helloService) {
        this.helloService = helloService;
    }
    async sayWelcome(personDto) {
        let msg = await this.helloService.welcome(personDto);
        return { data: msg };
    }
    async sayWelcome2(iName, iYear) {
        let msg = await this.helloService.welcome({ name: iName, year: iYear });
        return { data: msg };
    }
};
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'Say Hello!!!' }),
    common_1.Post('welcome'),
    common_1.Header('Content-Type', 'application/json'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDto]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "sayWelcome", null);
__decorate([
    swagger_1.ApiResponse({ status: 200 }),
    swagger_1.ApiQuery({
        name: 'name',
        required: true,
        type: String,
    }),
    swagger_1.ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: `you can ignore this`
    }),
    common_1.Get('welcome'),
    __param(0, common_1.Query('name')), __param(1, common_1.Query('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "sayWelcome2", null);
HelloController = __decorate([
    common_1.Controller('hello'),
    __metadata("design:paramtypes", [hello_service_1.HelloService])
], HelloController);
exports.HelloController = HelloController;
//# sourceMappingURL=hello.controller.js.map