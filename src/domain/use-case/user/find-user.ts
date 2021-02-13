import { IUserEntity } from '../../entitys/user-entity'

export interface IFindUser {
  find: (id:Number) => Promise<IFindUser.Result>
}

export namespace IFindUser {
  export type Result = IUserEntity
}
