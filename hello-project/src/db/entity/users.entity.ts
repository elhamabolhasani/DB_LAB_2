import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import RequestEntity from './request.entity';

@Entity()
export default class UsersEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
  @OneToMany( type => RequestEntity , request => request.user)
  requests: RequestEntity[];
  
}


  