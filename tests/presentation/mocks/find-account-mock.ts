import { IUserEntity } from '../../../src/domain/entitys/user-entity'
import { IFindAccount } from '../../../src/domain/use-case/account/find-account'
import faker from 'faker'

export class FindAccountMock implements IFindAccount {
  value: Number
  userId: IUserEntity
  id: Number

  async find (userId: Number): Promise<IFindAccount.Result> {
    this.userId = userId as any as IUserEntity
    this.id = faker.random.number(99)
    this.value = Number(faker.finance.amount(100, 500))
    return {
      userId: this.userId,
      id: this.id,
      value: this.value
    }
  }
}
