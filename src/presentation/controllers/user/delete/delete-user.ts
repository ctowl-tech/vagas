import { IDeleteUser, serverError, successResponse } from './imports'
import { IHttpRequest, IControllerInterface, IHttpResponse } from '../../../../presentation/protocols'

export class DeleteUserController implements IControllerInterface {
  constructor (
    private readonly deleteUser: IDeleteUser
  ) {}
  
  async handle (httpPayload:IHttpRequest):Promise<IHttpResponse> {
    try {
      await this.deleteUser.delete({ id: httpPayload.userId })
      
      return successResponse('Client has been removed')
    } catch (err) {
      return serverError(err)
    }
  }
}
