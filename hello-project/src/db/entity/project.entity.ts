import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import UsersEntity from './users.entity';
import RequestEntity from './request.entity';

@Entity()
export default class ProjectEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => UsersEntity, user => user.projects)
  user: UsersEntity;
  
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