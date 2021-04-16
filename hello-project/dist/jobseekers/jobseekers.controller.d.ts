import CreateUsersDto from './dto/create-users.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateRequestDto from './dto/create-request.dto';
import { JobseekersService } from './jobseekers.service';
import RequestIdDto from './dto/request-id.dto';
import UserId from './dto/UserId.dto';
import ProjectId from './dto/ProjectIdDel.dto';
import ProjectIdDto from './dto/ProjectId.dto';
export declare class JobseekersController {
    private readonly jobServices;
    constructor(jobServices: JobseekersService);
    postUsers(users: CreateUsersDto): Promise<import("../db/entity/users.entity").default>;
    postProjects(projects: CreateProjectDto): Promise<import("../db/entity/project.entity").default>;
    postRequests(requests: CreateRequestDto): Promise<import("../db/entity/request.entity").default>;
    getAllUser(): Promise<import("../db/entity/users.entity").default[]>;
    getAllRequests(): Promise<import("../db/entity/request.entity").default[]>;
    getAllProject(): Promise<import("../db/entity/project.entity").default[]>;
    getUserProjects(userIDs: UserId): Promise<import("../db/entity/project.entity").default[]>;
    getProjectRequests(projectIds: ProjectId): Promise<import("../db/entity/request.entity").default[]>;
    putRequests(requests: RequestIdDto): Promise<import("../db/entity/request.entity").default>;
    putProjects(projects: ProjectIdDto): Promise<import("../db/entity/project.entity").default>;
    deleteBooks(projectIds: ProjectId): Promise<import("../db/entity/project.entity").default>;
}
