import { IUserEntity } from '../../../src/domain/entitys/user-entity'
import { IUpdateAccount } from '../../../src/domain/use-case/account/update-account'
import faker from 'faker'

export class UpdateAccountMock implements IUpdateAccount {
  value:Number 
  userId:IUserEntity 
  id:Number 
  
  async update (payload:IUpdateAccount.Params):Promise<IUpdateAccount.Result> {
    this.userId = payload.userId
    this.id = payload.id || faker.random.number(99)
    this.value = payload.balance
    return true
  }
}
