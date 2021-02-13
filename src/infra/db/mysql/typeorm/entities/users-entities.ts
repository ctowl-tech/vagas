import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm'

@Entity('users')
class Users extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: String;

  @Column('varchar', { unique: true })
  email: String;

  @Column('varchar')
  password: String;

  @Column('varchar')
  address: String;

  @Column('varchar')
  city: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  users:Users
}

export { Users }
