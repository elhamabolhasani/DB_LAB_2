import { BaseEntity } from 'typeorm';
export default class GenreEntity extends BaseEntity {
    id: number;
    type: string;
}
