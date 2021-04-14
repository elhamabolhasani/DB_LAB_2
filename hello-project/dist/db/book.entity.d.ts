import { BaseEntity } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
export default class BookEntity extends BaseEntity {
    id: number;
    name: string;
    user: UserEntity;
    genres: GenreEntity[];
}
