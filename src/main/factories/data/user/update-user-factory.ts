import { BcrypAdapter } from '../../../../infra/adapters/bcrypt/bcrypt-adapter'
import { UpdateUserUser } from '../../../../data/use-cases/user/update/update-user'
import { makeUserRepositoryFactory } from '../../infra/repository/user-repository-factory'

export const makeDataUpdateUserFactory = () => {
  const cryptAdapter = new BcrypAdapter(10)
  return new UpdateUserUser(cryptAdapter, makeUserRepositoryFactory())
}
