import { IUserEntity } from '../../../domain/entitys/user-entity'

export interface IUpdateUser{
  update(user:IUpdateUser.Params):Promise<IUpdateUser.Result>
}

export namespace IUpdateUser{
  export type Params = {
    userId:Number
    name:String 
    password:String 
    address:String 
    city:String 
  }
  export type Result = Omit<IUserEntity, 'email'>
}
