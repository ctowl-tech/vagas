import { IValidation, IFindUser, NotFoundError, ICreateAccount, badRequest, serverError, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class CreateAccountController implements IControllerInterface {
  constructor (
    private readonly validation:IValidation,
    private readonly findUser:IFindUser,
    private readonly createAccount: ICreateAccount
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const payload = { ...httpPayload.body, userId: httpPayload.userId }
      
      const validatePayload = this.validation.validate(payload)
      if (validatePayload) {
        return badRequest(validatePayload)
      }
      
      const verifyUser = await !!this.findUser.find(payload.userId)
      if (!verifyUser) {
        return badRequest(new NotFoundError('User not found'))
      }

      const newAccount = await this.createAccount.save(payload)
      return successResponse(newAccount)
    } catch (err) {
      return serverError(err)
    }
  }
}
