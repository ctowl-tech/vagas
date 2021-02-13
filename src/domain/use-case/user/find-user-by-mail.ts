import { IUserEntity } from '../../entitys/user-entity'

export interface IFindUserByMail {
  findUserByMail: (payload:IFindUserByMail.Params) => Promise<IFindUserByMail.Result>
}

export namespace IFindUserByMail {
  export type Params = {
    email:String
  }
  export type Result = IUserEntity
}
