import { ICreateAccount } from '../../../domain/use-case/account/create-account'

export type ICreateAccountRepository = ICreateAccount 
export namespace ICreateAccountRepository {
  export type Params = ICreateAccount.Params
  export type Result = ICreateAccount.Result
}
