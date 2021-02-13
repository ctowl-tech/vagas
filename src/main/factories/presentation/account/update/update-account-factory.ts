import { makeAccountRepositoryFactory } from '../../../infra/repository/account-repository-factory'
import { makeDataWithdrawFactory } from '../../../data/account/withdraw-account-factory'
import { WithdrawAccountController } from '../../../../../presentation/controllers/account/update/withdraw-account'
import { makeUpdateAccountValidation } from './update-account-validation'

export const makeUpdateAccountFactory = () => {
  return new WithdrawAccountController(makeUpdateAccountValidation(), makeAccountRepositoryFactory(), makeDataWithdrawFactory(), makeAccountRepositoryFactory())
}
