import { BaseEntity } from 'typeorm';
import RequestEntity from './request.entity';
import ProjectEntity from './project.entity';
export default class UsersEntity extends BaseEntity {
    id: number;
    name: string;
    projects: ProjectEntity[];
    requests: RequestEntity[];
}
