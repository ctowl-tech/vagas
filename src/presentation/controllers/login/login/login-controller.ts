import { badRequest, serverError, successResponse, unauthorizedResponse, IAuthentication, IValidation } from './login-protocols'
import { IControllerInterface, IHttpRequest, IHttpResponse } from '../../../protocols'

export class LoginController implements IControllerInterface {
  constructor (private readonly payloadValidation:IValidation, private readonly authentication:IAuthentication) {}
  
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = await this.payloadValidation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const accessToken = await this.authentication.auth(httpRequest.body)
      if (!accessToken) {
        return unauthorizedResponse()
      }
      return successResponse(accessToken)
    } catch (err) {
      return serverError(err)
    }
  }
}
