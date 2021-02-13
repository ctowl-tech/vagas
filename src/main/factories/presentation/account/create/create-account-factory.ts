import { makeAccountRepositoryFactory } from '../../../infra/repository/account-repository-factory'
import { makeUserRepositoryFactory } from '../../../infra/repository/user-repository-factory'
import { CreateAccountController } from '../../../../../presentation/controllers/account/create/create-account'
import { makeAccountValidation } from './create-account-validation'

export const makeCreateAccountFactory = () => {
  return new CreateAccountController(makeAccountValidation(), makeUserRepositoryFactory(), makeAccountRepositoryFactory())
}
