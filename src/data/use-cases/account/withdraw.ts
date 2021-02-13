import { NotFoundError } from '../../../presentation/errors'
import { IVerifyWithdraw } from '../../../domain/use-case/account/verify-withdraw-account'

export class WithdrawAccount implements IVerifyWithdraw {
  constructor () {}

  verify (withdraw:Number, balance:Number):Number|Error {
    const totalValue = +balance - +withdraw  
    if (totalValue <= 0) {
      return new NotFoundError('Its current value is insufficient')
    }
    return totalValue
  }
}
