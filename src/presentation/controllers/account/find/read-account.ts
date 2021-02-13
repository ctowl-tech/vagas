import { serverError, IFindAccount, emptyResponse, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class FindAccountController implements IControllerInterface {
  constructor (
    private readonly findAccount: IFindAccount
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const account = await this.findAccount.find(httpPayload.userId)
      if (!account) {
        return emptyResponse()
      }
      
      return successResponse(account)
    } catch (err) {
      return serverError(err)
    }
  }
}
