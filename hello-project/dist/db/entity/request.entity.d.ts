import { BaseEntity } from 'typeorm';
import ProjectEntity from './project.entity';
import UsersEntity from './users.entity';
export default class RequestEntity extends BaseEntity {
    id: number;
    name: string;
    project: ProjectEntity;
    user: UsersEntity;
}
