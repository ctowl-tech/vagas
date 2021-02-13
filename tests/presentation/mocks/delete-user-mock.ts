import { IDeleteUser } from '../../../src/domain/use-case/user/delete-user'

export class DeleteUserMock implements IDeleteUser {
  id:Number
  
  async delete (user:IDeleteUser.Params):Promise<IDeleteUser.Result> {
    this.id = user.id
  }
}
