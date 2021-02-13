import { BcrypAdapter } from '../../../../infra/adapters/bcrypt/bcrypt-adapter'
import { JsonWebTokenAdapter } from '../../../../infra/adapters/jwt/jwt-adapter'
import { makeUserRepositoryFactory } from '../../infra/repository/user-repository-factory'
import { AuthenticationData } from '../../../../data/use-cases/authenticate/authenticate-data'

export const makeAuthenticateFactory = () => {
  const bcryptAdapter = new BcrypAdapter(10)
  const jwtAdapter = new JsonWebTokenAdapter()
  return new AuthenticationData(bcryptAdapter, makeUserRepositoryFactory(), jwtAdapter)
}
