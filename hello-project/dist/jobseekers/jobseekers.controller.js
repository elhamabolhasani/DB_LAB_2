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
exports.JobseekersController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const create_users_dto_1 = require("./dto/create-users.dto");
const create_project_dto_1 = require("./dto/create-project.dto");
const create_request_dto_1 = require("./dto/create-request.dto");
const jobseekers_service_1 = require("./jobseekers.service");
const request_id_dto_1 = require("./dto/request-id.dto");
const UserId_dto_1 = require("./dto/UserId.dto");
const ProjectIdDel_dto_1 = require("./dto/ProjectIdDel.dto");
const ProjectId_dto_1 = require("./dto/ProjectId.dto");
let JobseekersController = class JobseekersController {
    constructor(jobServices) {
        this.jobServices = jobServices;
    }
    postUsers(users) {
        return this.jobServices.insert_user(users);
    }
    postProjects(projects) {
        return this.jobServices.insert_project(projects);
    }
    postRequests(requests) {
        return this.jobServices.insert_request(requests);
    }
    getAllUser() {
        return this.jobServices.getAllUsers();
    }
    getAllRequests() {
        return this.jobServices.getAllRequests();
    }
    getAllProject() {
        return this.jobServices.getAllProjects();
    }
    getUserProjects(userIDs) {
        return this.jobServices.getProjectOfUser(userIDs);
    }
    getProjectRequests(projectIds) {
        return this.jobServices.getRequestOfProject(projectIds);
    }
    putRequests(requests) {
        return this.jobServices.put_request(requests);
    }
    putProjects(projects) {
        return this.jobServices.put_project(projects);
    }
    deleteBooks(projectIds) {
        return this.jobServices.delete_project(projectIds);
    }
};
__decorate([
    common_2.Post('User'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postUsers", null);
__decorate([
    common_2.Post('Project'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postProjects", null);
__decorate([
    common_2.Post('Request'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_request_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "postRequests", null);
__decorate([
    common_2.Get('User'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getAllUser", null);
__decorate([
    common_2.Get('Request'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getAllRequests", null);
__decorate([
    common_2.Get('Project'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getAllProject", null);
__decorate([
    common_2.Post('User/Projects'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserId_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getUserProjects", null);
__decorate([
    common_2.Post('/Project/Requests'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectIdDel_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "getProjectRequests", null);
__decorate([
    common_2.Put('Request'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_id_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putRequests", null);
__decorate([
    common_2.Put('Project'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectId_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "putProjects", null);
__decorate([
    common_2.Delete('project'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectIdDel_dto_1.default]),
    __metadata("design:returntype", void 0)
], JobseekersController.prototype, "deleteBooks", null);
JobseekersController = __decorate([
    common_1.Controller('jobseekers'),
    __metadata("design:paramtypes", [jobseekers_service_1.JobseekersService])
], JobseekersController);
exports.JobseekersController = JobseekersController;
//# sourceMappingURL=jobseekers.controller.js.map