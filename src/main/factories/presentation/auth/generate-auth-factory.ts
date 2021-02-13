import { makeAuthenticateFactory } from '../../data/auth/authenticate-factory'
import { LoginController } from '../../../../presentation/controllers/login/login/login-controller'
import { makeLogInValidation } from './login-validation'

export const makeLoginFactory = () => {
  return new LoginController(makeLogInValidation(), makeAuthenticateFactory())
}
