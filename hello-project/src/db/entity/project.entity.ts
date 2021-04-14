import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import RequestEntity from './request.entity';

@Entity()
export default class ProjectEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;
  
  @Column({ length: 500 })
  name: string;
  
  @Column({ length: 500 })
  priority: string;
  
  @Column()
  deedline_days: number;
  
  @Column()
  price: number;
            

  @OneToMany( type => RequestEntity , request => request.project)
  requests: RequestEntity[];
  
}