import { IUpdateUser } from '../../../domain/use-case/user/update-user'

export type IUpdateUserRepository = {
  update:(payload:IUpdateUser.Params)=>Promise<IUpdateUserRepository.Result>
}

export namespace IUpdateUserRepository {
  export type Params = IUpdateUser.Params
  export type Result = IUpdateUser.Result
}
