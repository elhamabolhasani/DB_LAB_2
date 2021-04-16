import { Controller } from '@nestjs/common';
import { Body, Get, Post, Delete, Put, ParseIntPipe } from '@nestjs/common';
import CreateUsersDto from './dto/create-users.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateRequestDto from './dto/create-request.dto';
import { JobseekersService } from './jobseekers.service';
import RequestIdDto from './dto/request-id.dto';
import UserId from './dto/UserId.dto';
import ProjectId from './dto/ProjectIdDel.dto';
import ProjectIdDto from './dto/ProjectId.dto';



@Controller('jobseekers')
export class JobseekersController {
	constructor(private readonly jobServices: JobseekersService) {}
	// Post
	@Post('User/post')
	  postUsers( @Body() users: CreateUsersDto) {
		return this.jobServices.insert_user(users);
	}
	@Post('Project/post')
	  postProjects( @Body() projects: CreateProjectDto) {
		return this.jobServices.insert_project(projects);
	}
	@Post('Request/post')
	  postRequests( @Body() requests: CreateRequestDto) {
		return this.jobServices.insert_request(requests);
	}
	// Get 
	@Get('User/get')
	getAllUser() {
		return this.jobServices.getAllUsers();
	}
	@Get('Request/get')
	getAllRequests() {
		return this.jobServices.getAllRequests();
	}
	@Get('Project/get')
	getAllProject() {
		return this.jobServices.getAllProjects();
	}
	@Post('User/Projects/get')
	  getUserProjects( @Body() userIDs: UserId ) {
		return this.jobServices.getProjectOfUser(userIDs);
	 }
	@Post('/Project/Request/get')
	  getProjectRequests(@Body() projectIds: ProjectId ) {
		return this.jobServices.getRequestOfProject(projectIds);
	 }
	// Put 
	@Put('Request/put')
	  putRequests( @Body() requests: RequestIdDto) {
		return this.jobServices.put_request(requests);
	}
	@Put('Project/put')
	  putProjects( @Body() projects: ProjectIdDto) {
		return this.jobServices.put_project(projects);
	}
	// Delete
	@Delete('project/delete')
	  deleteBooks(@Body() projectIds: ProjectId) {
		  return this.jobServices.delete_project(projectIds);
	  }
	
}
