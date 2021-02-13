import { makeDataCreateUserFactory } from '../../../data/user/create-user-factory'
import { CreateUserController } from '../../../../../presentation/controllers/user/create/create-user'
import { makeUserValidation } from './create-user-validation'

export const makeCreateUserFactory = () => {
  return new CreateUserController(makeUserValidation(), makeDataCreateUserFactory())
}
