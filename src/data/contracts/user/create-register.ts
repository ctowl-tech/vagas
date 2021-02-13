import { ICreateUser } from '../../../domain/use-case/user/create-user'

export type IRegisterNewUser = {
  create:(payload:IRegisterNewUser.Params)=>Promise<IRegisterNewUser.Result>
}

export namespace IRegisterNewUser {
  export type Params = ICreateUser.Params
  export type Result = ICreateUser.Result
}
