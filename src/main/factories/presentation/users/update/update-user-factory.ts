import { UpdateUserController } from '../../../../../presentation/controllers/user/update/update-user'
import { makeDataUpdateUserFactory } from '../../../../factories/data/user/update-user-factory'
import { makeUserValidation } from './update-user-validation'

export const makeUpdateUserFactory = () => {
  return new UpdateUserController(makeUserValidation(), makeDataUpdateUserFactory())
}
