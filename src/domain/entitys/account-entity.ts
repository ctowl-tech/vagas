import { IUserEntity } from './user-entity'

export interface IAccountEntity{
  id:Number
  userId:IUserEntity
  value:Number 
  createdAt?:Date
  updatedAt?:Date
}
