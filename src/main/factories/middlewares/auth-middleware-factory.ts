import { AuthMiddleware } from '../../../presentation/middlewares/auth'
import { makeVerifyTokenData } from '../data/auth/verify-account-factory'

export const makeAuthMiddleware = () => {
  return new AuthMiddleware(makeVerifyTokenData())
}
