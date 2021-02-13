import { IAuthenticationModel } from '../../entitys/authentication'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  auth(authenticationParams: AuthenticationParams):Promise<IAuthenticationModel>
}
