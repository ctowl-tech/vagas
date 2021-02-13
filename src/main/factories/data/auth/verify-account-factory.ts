import { VerifyAuthToken } from '../../../../data/use-cases/authenticate/verify-token-data'
import { JsonWebTokenAdapter } from '../../../../infra/adapters/jwt/jwt-adapter'
import { makeUserRepositoryFactory } from '../../infra/repository/user-repository-factory'

export const makeVerifyTokenData = () => {
  const jwtAdapter = new JsonWebTokenAdapter()
  return new VerifyAuthToken(jwtAdapter, makeUserRepositoryFactory())
}
