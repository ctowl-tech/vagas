
import { WithdrawAccount } from '../../../src/data/use-cases/account/withdraw'
import { NotFoundError } from '../../../src/presentation/errors'
import faker from 'faker'

let makePayload
const makeSut = () => {
  const sut = new WithdrawAccount()
  return {
    sut 
  }
}

describe('Withdraw account', () => {
  beforeEach(() => {
    makePayload = {
      withdraw: faker.random.number(99),
      balance: 800
    }
  })
 
  it('Return error instace when count is <= 0', async () => {
    const { sut } = makeSut()
    const mockParameters = {
      withdraw: 900,
      balance: 800
    }
    const response = await sut.verify(mockParameters.withdraw, mockParameters.balance)
    expect(response).toEqual(new NotFoundError('Its current value is insufficient'))
  })
 
  it('Return total value when balance is sufficient', async () => {
    const { sut } = makeSut()

    const response = await sut.verify(makePayload.withdraw, makePayload.balance)
    expect(response).toEqual(makePayload.balance - makePayload.withdraw)
  })
})
