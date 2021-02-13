import { IFindUser } from '../../../domain/use-case/user/find-user'

export type IFindUserRepository = {
  find:(id:Number)=>Promise<IFindUser.Result>
}

export namespace IFindUserRepository {
  export type Result = IFindUser.Result
}
