import { BaseEntity } from 'typeorm';
import RequestEntity from './request.entity';
export default class ProjectEntity extends BaseEntity {
    id: number;
    ownerId: number;
    name: string;
    priority: string;
    deedline_days: number;
    price: number;
    requests: RequestEntity[];
}
