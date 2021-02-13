import { IAccountEntity } from '../../../domain/entitys/account-entity'
import { IUserEntity } from '../../../domain/entitys/user-entity'

export interface ICreateAccount{
  save(user:ICreateAccount.Params):Promise<ICreateAccount.Result>
}

export namespace ICreateAccount{
  export type Params = {
    userId:IUserEntity
    value:Number 
  }
  export type Result = IAccountEntity
}
