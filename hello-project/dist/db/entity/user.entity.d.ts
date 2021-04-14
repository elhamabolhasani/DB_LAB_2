import { BaseEntity } from 'typeorm';
import BookEntity from './book.entity';
export default class UserEntity extends BaseEntity {
    id: number;
    name: string;
    books: BookEntity[];
}
