import { IAuthenticationModel } from '../../../domain/entitys/authentication'

export interface IAuthentication {
  auth(authenticationParams: IAuthentication.Params):Promise<IAuthentication.Result>
}

export namespace IAuthentication {
  export type Params = {
    email: String
    password: String
  }
  export type Result = IAuthenticationModel
}
