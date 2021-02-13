import { IUpdateAccount } from '../../../domain/use-case/account/update-account'

export type IUpdateAccountRepository = IUpdateAccount 
export namespace IUpdateAccountRepository {
  export type Params = IUpdateAccount.Params
  export type Result = IUpdateAccount.Result
}
