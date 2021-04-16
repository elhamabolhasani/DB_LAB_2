"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobseekersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("../db/entity/users.entity");
const request_entity_1 = require("../db/entity/request.entity");
const project_entity_1 = require("../db/entity/project.entity");
let JobseekersService = class JobseekersService {
    async insert_user(userDetails) {
        const userEntity = users_entity_1.default.create();
        const { name } = userDetails;
        userEntity.name = name;
        await users_entity_1.default.save(userEntity);
        return userEntity;
    }
    async getAllUsers() {
        return await users_entity_1.default.find();
    }
    async getRequestOfUser(userID) {
        console.log(typeof (userID));
        const user = await users_entity_1.default.findOne({ where: { id: userID }, relations: ['requests'] });
        return user.requests;
    }
    async getProjectOfUser(userID) {
        console.log(typeof (userID));
        const user = await users_entity_1.default.findOne({ where: { id: userID }, relations: ['projects'] });
        return user.projects;
    }
    async insert_request(requestDetails) {
        const { name, project, user } = requestDetails;
        const request = new request_entity_1.default();
        request.name = name;
        request.user = await users_entity_1.default.findOne(user);
        request.project = await project_entity_1.default.findOne(project);
        await request.save();
        return request;
    }
    async put_request(requestDetails) {
        const { name, project, user, requestId } = requestDetails;
        const request = await request_entity_1.default.findOne(requestId);
        if (!request) {
            throw new Error(`The request with id: ${requestId} does not exist!`);
        }
        request.name = name;
        request.user = await users_entity_1.default.findOne(user);
        request.project = await project_entity_1.default.findOne(project);
        await request.save();
        return request;
    }
    async insert_project(projectDetails) {
        const projectEntity = project_entity_1.default.create();
        const { user, name, priority, deedline_days, price } = projectDetails;
        projectEntity.name = name;
        projectEntity.priority = priority;
        projectEntity.deedline_days = deedline_days;
        projectEntity.price = price;
        projectEntity.user = await users_entity_1.default.findOne(user);
        await project_entity_1.default.save(projectEntity);
        return projectEntity;
    }
    async getRequestOfProject(projectID) {
        console.log(typeof (projectID));
        const project = await project_entity_1.default.findOne({ where: { id: projectID }, relations: ['requests'] });
        return project.requests;
    }
};
JobseekersService = __decorate([
    common_1.Injectable()
], JobseekersService);
exports.JobseekersService = JobseekersService;
//# sourceMappingURL=jobseekers.service.js.map