import { Injectable } from '@nestjs/common';
import UsersEntity from '../db/entity/users.entity';
import RequestEntity from '../db/entity/request.entity';
import ProjectEntity from '../db/entity/project.entity';
import CreateUsersDto from './dto/create-users.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateRequestDto from './dto/create-request.dto';
import RequestIdDto from './dto/request-id.dto';

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
  async getProjectOfUser(userID: number): Promise<ProjectEntity[]> {
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
   async getRequestOfProject(projectID: number): Promise<RequestEntity[]> {
    console.log(typeof(projectID));
    const project: ProjectEntity = await ProjectEntity.findOne({where: {id: projectID}, relations: ['requests']});
    return project.requests;
  }
  
  
}
