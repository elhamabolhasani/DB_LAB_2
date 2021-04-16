import { Injectable } from '@nestjs/common';
import UsersEntity from '../db/entity/users.entity';
import RequestEntity from '../db/entity/request.entity';
import ProjectEntity from '../db/entity/project.entity';
import CreateUsersDto from './dto/create-users.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateRequestDto from './dto/create-request.dto';
import RequestIdDto from './dto/request-id.dto';
import UserId from './dto/UserId.dto';
import ProjectIdDto from './dto/ProjectId.dto';
import ProjectId from './dto/ProjectIdDel.dto';



@Injectable()
export class JobseekersService {
	// uesr part
	async insert_user(userDetails: CreateUsersDto): Promise<UsersEntity> {
    const userEntity: UsersEntity = UsersEntity.create();
    const {name } = userDetails;
    userEntity.name = name;
    await UsersEntity.save(userEntity);
    return userEntity;
   }
   async getAllUsers(): Promise<UsersEntity[]> {
    return await UsersEntity.find();
  }
  async getRequestOfUser(userID: number): Promise<RequestEntity[]> {
    console.log(typeof(userID));
    const user: UsersEntity = await UsersEntity.findOne({where: {id: userID}, relations: ['requests']});
    return user.requests;
  }
  async getProjectOfUser(userDetails: UserId): Promise<ProjectEntity[]> {
	const { userID } = userDetails;
    console.log(typeof(userID));
    const user: UsersEntity = await UsersEntity.findOne({where: {id: userID}, relations: ['projects']});
    return user.projects;
  }
  
  // request part 
  async insert_request(requestDetails: CreateRequestDto): Promise<RequestEntity> {
    const { name , project , user } = requestDetails;
    const request = new RequestEntity();
    request.name = name;
    request.user = await UsersEntity.findOne(user) ;
	request.project = await ProjectEntity.findOne(project) ;
	
    await request.save();
    return request;
  }
  async put_request(requestDetails: RequestIdDto): Promise<RequestEntity> {
    const { name , project , user , requestId} = requestDetails;
	const request = await RequestEntity.findOne(requestId);
	  if (!request) {
		throw new Error(`The request with id: ${requestId} does not exist!`);
	  }	  
    request.name = name;
    request.user = await UsersEntity.findOne(user) ;
    request.project = await ProjectEntity.findOne(project) ;
    await request.save();
    return request;
  }
  async getAllRequests(): Promise<RequestEntity[]> {
    return await RequestEntity.find();
  }
  
  // project part
  async insert_project(projectDetails: CreateProjectDto): Promise<ProjectEntity> {
    const projectEntity: ProjectEntity = ProjectEntity.create();
    const { user, name, priority, deedline_days, price} = projectDetails;
    projectEntity.name = name;
	projectEntity.priority = priority;
	projectEntity.deedline_days = deedline_days;
	projectEntity.price = price;
	projectEntity.user = await UsersEntity.findOne(user) ;
	
    await ProjectEntity.save(projectEntity);
    return projectEntity;
   }
   async put_project(projectDetails: ProjectIdDto): Promise<ProjectEntity> {
    const { user, name, priority, deedline_days, price, projectId} = projectDetails;
	console.log(typeof(projectId));
	const project = await ProjectEntity.findOne(projectId);
	  if (!project) {
		throw new Error(`The project with id: ${projectId} does not exist!`);
	  }	  
    project.name = name;
	project.priority = priority;
	project.deedline_days = deedline_days;
	project.price = price;
	project.user = await UsersEntity.findOne(user) ;
	
    await project.save();
    return project;
  }
  async delete_project(projectDetails: ProjectId): Promise<ProjectEntity> {
	  const { projectId } = projectDetails;
      const project = await ProjectEntity.findOne(projectId);
	  if (!project) {
		throw new Error(`The project with id: ${projectId} does not exist!`);
	  }

	  await project.remove();
	  return project;
  }
   async getRequestOfProject(projectDetails : ProjectId): Promise<RequestEntity[]> {
	const { projectId } = projectDetails;
    console.log(typeof(projectId));
    const project: ProjectEntity = await ProjectEntity.findOne({where: {id: projectId}, relations: ['requests']});
    return project.requests;
  }
  async getAllProjects(): Promise<ProjectEntity[]> {
    return await ProjectEntity.find();
  }
  
  
}
