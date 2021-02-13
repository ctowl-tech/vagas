import { IFindUser } from '../../../domain/use-case/find-user'

export type IFindUserRepository = {
  find:(id:Number)=>Promise<IFindUser.Result>
}

export namespace IFindUserRepository {
  export type Result = IFindUser.Result
}
