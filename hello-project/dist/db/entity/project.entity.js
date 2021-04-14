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
const request_entity_1 = require("./request.entity");
let ProjectEntity = class ProjectEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "deedline_days", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.OneToMany(type => request_entity_1.default, request => request.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "requests", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity()
], ProjectEntity);
exports.default = ProjectEntity;
//# sourceMappingURL=project.entity.js.map