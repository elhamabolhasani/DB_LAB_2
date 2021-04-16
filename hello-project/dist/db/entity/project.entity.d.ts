import { BaseEntity } from 'typeorm';
import UsersEntity from './users.entity';
import RequestEntity from './request.entity';
export default class ProjectEntity extends BaseEntity {
    id: number;
    user: UsersEntity;
    name: string;
    priority: string;
    deedline_days: number;
    price: number;
    requests: RequestEntity[];
}
