import { IUpdateUser, IValidation, badRequest, serverError, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class UpdateUserController implements IControllerInterface {
  constructor (
    private readonly validation:IValidation,
    private readonly updateUser: IUpdateUser
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const payload = { ...httpPayload.body, userId: httpPayload.userId }
      const validatePayload = this.validation.validate(payload)
      if (validatePayload) {
        return badRequest(validatePayload)
      }
      
      const newUser = await this.updateUser.update(payload)
      delete newUser.password
      return successResponse(newUser)
    } catch (err) {
      return serverError(err)
    }
  }
}
