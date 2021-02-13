import { IUserEntity } from '../../../domain/entitys/user-entity'

export interface ICreateUser{
  save(user:ICreateUser.Params):Promise<IUserEntity>
}

export namespace ICreateUser{
  export type Params = {
    email:String
    name:String 
    password:String 
    address:String 
    city:String 
  }
  export type Result = IUserEntity
}
