import { IFindAccount } from '../../../domain/use-case/account/find-account'

export type IFindAccountRepository = IFindAccount 
export namespace IFindAccountRepository {
  export type Result = IFindAccount.Result
}
