import faker from 'faker'
import { ICreateAccount } from '../../../src/domain/use-case/account/create-account'
import { IUserEntity } from '../../../src/domain/entitys/user-entity'

export class CreateAccountMock implements ICreateAccount {
  id: Number
  userId: IUserEntity
  value: Number

  async save (payload: ICreateAccount.Params): Promise<ICreateAccount.Result> {
    this.id = faker.random.number(100)
    this.userId = payload.userId
    this.value = payload.value
    return {
      id: this.id,
      userId: this.userId,
      value: this.value
    }
  }
}
