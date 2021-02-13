import { makeAccountRepositoryFactory } from '../../../infra/repository/account-repository-factory'
import { FindAccountController } from '../../../../../presentation/controllers/account/find/read-account'

export const makeFindAccountFactory = () => {
  return new FindAccountController(makeAccountRepositoryFactory())
}
