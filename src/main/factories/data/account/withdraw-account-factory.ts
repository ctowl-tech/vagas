import { WithdrawAccount } from '../../../../data/use-cases/account/withdraw'

export const makeDataWithdrawFactory = () => {
  return new WithdrawAccount()
}
