import UsersEntity from '../db/entity/users.entity';
import RequestEntity from '../db/entity/request.entity';
import ProjectEntity from '../db/entity/project.entity';
import CreateUsersDto from './dto/create-users.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateRequestDto from './dto/create-request.dto';
import RequestIdDto from './dto/request-id.dto';
export declare class JobseekersService {
    insert_user(userDetails: CreateUsersDto): Promise<UsersEntity>;
    getAllUsers(): Promise<UsersEntity[]>;
    getRequestOfUser(userID: number): Promise<RequestEntity[]>;
    getProjectOfUser(userID: number): Promise<ProjectEntity[]>;
    insert_request(requestDetails: CreateRequestDto): Promise<RequestEntity>;
    put_request(requestDetails: RequestIdDto): Promise<RequestEntity>;
    insert_project(projectDetails: CreateProjectDto): Promise<ProjectEntity>;
    getRequestOfProject(projectID: number): Promise<RequestEntity[]>;
}
