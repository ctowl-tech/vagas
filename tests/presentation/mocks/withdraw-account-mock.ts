import { IVerifyWithdraw } from '../../../src/domain/use-case/account/verify-withdraw-account'

export class VerifyWithdrawMock implements IVerifyWithdraw {
  withdraw: Number
  balance: Number

  verify (withdraw:Number, balance:Number):Number|Error {
    this.withdraw = withdraw
    this.balance = balance
    const totalValue = +this.withdraw - +this.balance
    return totalValue
  }
}
