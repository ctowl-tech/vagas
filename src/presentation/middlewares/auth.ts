import { IMiddleware, IHttpRequest, IHttpResponse, IVerifyAccountToken } from './auth-middleware-protocols'
import { forbidden, successResponse, serverError } from '../../presentation/helpers/http/http-helper'
import { AccessDeniedError } from '../../presentation/errors'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly verifyAccont: IVerifyAccountToken
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.verifyAccont.load(accessToken)
        if (account) {
          return successResponse({ userId: account.id, email: account.email })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
