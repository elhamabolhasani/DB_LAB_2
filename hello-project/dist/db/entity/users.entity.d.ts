import { BaseEntity } from 'typeorm';
import RequestEntity from './request.entity';
export default class UsersEntity extends BaseEntity {
    id: number;
    name: string;
    requests: RequestEntity[];
}
