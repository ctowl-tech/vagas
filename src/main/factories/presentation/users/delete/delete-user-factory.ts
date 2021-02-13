import { DeleteUserController } from '../../../../../presentation/controllers/user/delete/delete-user'
import { makeUserRepositoryFactory } from '../../../../../main/factories/infra/repository/user-repository-factory'

export const makeDeleteUserFactory = () => {
  return new DeleteUserController(makeUserRepositoryFactory())
}
