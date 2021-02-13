import { IFindUserByMail } from '../../../domain/use-case/user/find-user-by-mail'

export type IFindUserByMailData = {
  findUserByMail:(payload:IFindUserByMailData.Params)=>Promise<IFindUserByMailData.Result>
}

export namespace IFindUserByMailData {
  export type Params = IFindUserByMail.Params
  export type Result = IFindUserByMail.Result
}
