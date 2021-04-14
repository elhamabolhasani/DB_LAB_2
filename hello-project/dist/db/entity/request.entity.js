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
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./project.entity");
const users_entity_1 = require("./users.entity");
let RequestEntity = class RequestEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RequestEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], RequestEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => project_entity_1.default, project => project.requests),
    __metadata("design:type", project_entity_1.default)
], RequestEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.default, user => user.requests),
    __metadata("design:type", users_entity_1.default)
], RequestEntity.prototype, "user", void 0);
RequestEntity = __decorate([
    typeorm_1.Entity()
], RequestEntity);
exports.default = RequestEntity;
//# sourceMappingURL=request.entity.js.map