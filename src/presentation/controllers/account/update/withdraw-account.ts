import { IValidation, IFindAccount, IVerifyWithdraw, IUpdateAccount, NotFoundError, badRequest, serverError, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class WithdrawAccountController implements IControllerInterface {
  constructor (
    private readonly validation:IValidation,
    private readonly findAccount:IFindAccount,
    private readonly verifyWithdraw: IVerifyWithdraw,
    private readonly updateBalance: IUpdateAccount
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const validatePayload = this.validation.validate(httpPayload.body)
      if (validatePayload) {
        return badRequest(validatePayload)
      }
      
      const verifyAccount = await this.findAccount.find(httpPayload.userId)
      if (!verifyAccount) {
        return badRequest(new NotFoundError('User not found'))
      }

      const currentBalance = this.verifyWithdraw.verify(httpPayload.body.value, verifyAccount.value)
      if (currentBalance instanceof Error) {
        return badRequest(currentBalance)
      }

      await this.updateBalance.update({ userId: httpPayload.userId, balance: currentBalance, id: verifyAccount.id })
      delete verifyAccount.userId.password
      return successResponse({ ...verifyAccount, value: currentBalance })
    } catch (err) {
      return serverError(err)
    }
  }
}
