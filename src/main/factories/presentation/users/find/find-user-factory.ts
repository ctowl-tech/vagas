import { FindUserController } from '../../../../../presentation/controllers/user/find/find-user'
import { makeUserRepositoryFactory } from '../../../../../main/factories/infra/repository/user-repository-factory'

export const makeFindUserFactory = () => {
  return new FindUserController(makeUserRepositoryFactory())
}
