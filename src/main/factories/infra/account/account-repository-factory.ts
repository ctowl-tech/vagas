import { AccountRepository } from '../../../../infra/db/mysql/typeorm/repository/account/account-repository'

export const makeAccountRepositoryFactory = () => {
  return new AccountRepository()
}
