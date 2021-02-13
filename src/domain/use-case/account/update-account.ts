import { IUserEntity } from '../../../domain/entitys/user-entity'

export interface IUpdateAccount{
  update(payload:IUpdateAccount.Params):Promise<IUpdateAccount.Result>
}

export namespace IUpdateAccount{
  export type Params = {
    id:Number,
    balance:Number,
    userId:IUserEntity
  }
  export type Result = Boolean
}
