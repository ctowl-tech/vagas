import { UserRepository } from '../../../../infra/db/mysql/typeorm/repository/users/users-repository'

export const makeUserRepositoryFactory = () => {
  return new UserRepository()
}
