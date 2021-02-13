import { serverError, IFindUser, emptyResponse, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class FindUserController implements IControllerInterface {
  constructor (
    private readonly findUser: IFindUser
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      const user = await this.findUser.find(httpPayload.userId)
      if (!user) {
        return emptyResponse()
      }
      
      return successResponse(user)
    } catch (err) {
      return serverError(err)
    }
  }
}
