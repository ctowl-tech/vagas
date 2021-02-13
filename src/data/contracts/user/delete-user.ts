import { IDeleteUser } from '../../../domain/use-case/user/delete-user'

export type IDeleteUserRepository = {
  delete:(params:IDeleteUserRepository.Params)=>Promise<IDeleteUserRepository.Result>
}

export namespace IDeleteUserRepository {
  export type Result = IDeleteUser.Result
  export type Params = IDeleteUser.Params
}
