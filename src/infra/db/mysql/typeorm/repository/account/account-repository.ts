import { getRepository } from 'typeorm'
import { ICreateAccountRepository } from '../../../../../../data/contracts/account/create-account'
import { IUpdateAccountRepository } from '../../../../../../data/contracts/account/update-account'
import { IFindAccountRepository } from '../../../../../../data/contracts/account/find-account'
import { Users } from '../../entities/users-entities'
import { Account } from '../../entities/users-account'

export class AccountRepository implements ICreateAccountRepository, IUpdateAccountRepository {
  async save (payload:ICreateAccountRepository.Params):Promise<ICreateAccountRepository.Result> {
    const account = new Account()
    account.userId = payload.userId as Users
    account.value = payload.value 
    return getRepository(Account).create(account).save()
  }

  async find (userId:Number):Promise<IFindAccountRepository.Result> {
    return getRepository(Account).findOne({ where: { userId: userId }, relations: ['userId'] })
  }

  async update (payload:IUpdateAccountRepository.Params):Promise<IUpdateAccountRepository.Result> {
    const account = new Account()
    account.userId = payload.userId as Users
    account.value = payload.balance
    account.id = payload.id
    return !!getRepository(Account).save(account)
  }
}
