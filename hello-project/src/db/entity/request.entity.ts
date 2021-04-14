import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import BookEntity from './book.entity';
import ProjectEntity from './project.entity';
import UsersEntity from './users.entity';

@Entity()
export default class RequestEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
  @ManyToOne(type => ProjectEntity, project => project.requests)
  project: ProjectEntity;
  
  @ManyToOne(type => UsersEntity, user => user.requests)
  user: UsersEntity;
  
}


  