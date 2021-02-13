import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  OneToOne,
  Column
} from 'typeorm'
import { Users } from './users-entities'

@Entity('account')
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @OneToOne(type => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  userId: Users;
  
  @Column({ type: 'float' })
  value:Number

  @CreateDateColumn() 
  createdAt: Date; 
  
  @UpdateDateColumn()
  updatedAt: Date;

  account: Account;
}

export { Account }
