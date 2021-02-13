import { ICreateUser, IValidation, badRequest, serverError, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class CreateUserController implements IControllerInterface {
  constructor (
    private readonly validation:IValidation,
    private readonly createUser: ICreateUser
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const validatePayload = this.validation.validate(httpPayload.body)
      if (validatePayload) {
        return badRequest(validatePayload)
      }
      
      const newUser = await this.createUser.save(httpPayload.body)
      
      return successResponse(newUser)
    } catch (err) {
      return serverError(err)
    }
  }
}
