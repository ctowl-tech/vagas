import { IAccountEntity } from '../../../domain/entitys/account-entity'

export interface IFindAccount {
  find: (userId:Number) => Promise<IFindAccount.Result>
}

export namespace IFindAccount {
  export type Result = IAccountEntity
}
