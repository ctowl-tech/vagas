import { BcrypAdapter } from '../../../../infra/adapters/bcrypt/bcrypt-adapter'
import { RegisterUser } from '../../../../data/use-cases/user/register/create-user-register'
import { makeUserRepositoryFactory } from '../../infra/repository/user-repository-factory'

export const makeDataCreateUserFactory = () => {
  const cryptAdapter = new BcrypAdapter(10)
  return new RegisterUser(cryptAdapter, makeUserRepositoryFactory())
}
