import faker from 'faker'
import { ValidationMock } from '../../../mocks/validation-mock'
import { MissingParamError, NotFoundError } from '../../../../../src/presentation/errors'
import { FindAccountMock } from '../../../../presentation/mocks/find-account-mock'
import { UpdateAccountMock } from '../../../../presentation/mocks/update-account-mock'
import { VerifyWithdrawMock } from '../../../../presentation/mocks/withdraw-account-mock'
import { badRequest, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'
import { WithdrawAccountController } from '../../../../../src/presentation/controllers/account/update/withdraw-account'

const makeSut = () => {
  const validationSut = new ValidationMock()
  const findAccountSut = new FindAccountMock()
  const updateAccountSut = new UpdateAccountMock()
  const verifyWithdraw = new VerifyWithdrawMock()
  const sut = new WithdrawAccountController(validationSut, findAccountSut, verifyWithdraw, updateAccountSut)
  return {
    validationSut,
    findAccountSut,
    updateAccountSut,
    verifyWithdraw,
    sut
  }
}

let makePayload
describe('Verify Withdraw Controller', () => {
  beforeEach(() => {
    makePayload = {
      userId: faker.random.number(99),
      body: {
        value: faker.finance.amount()
      }
    }
  })
  it('Should expected return error when validation return errors', async () => {
    const { sut, validationSut } = makeSut()
    jest.spyOn(validationSut, 'validate').mockReturnValueOnce(new MissingParamError('any_param'))
    const httpResponse = await sut.handle(makePayload)

    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_param')))
  })
  it('Should expected to call validaiton with correct params', async () => {
    const { sut, validationSut } = makeSut()
    const params = jest.spyOn(validationSut, 'validate')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.body)
  })

  it('Should expected call findAccountSut with correct params ', async () => {
    const { sut, findAccountSut } = makeSut()
    const params = jest.spyOn(findAccountSut, 'find')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.userId)
  })

  it('Should expected return serverError when findAccountSut throws ', async () => {
    const { sut, findAccountSut } = makeSut()
    jest.spyOn(findAccountSut, 'find').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })

  it('Should expected return bad request when find return null', async () => {
    const { sut, findAccountSut } = makeSut()
    jest.spyOn(findAccountSut, 'find').mockReturnValueOnce(null)
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(badRequest(new NotFoundError('User not found')))
  })
  it('Should expected to called verifyWithDraw with correct params ', async () => {
    const { sut, findAccountSut, verifyWithdraw } = makeSut()
    const spy = jest.spyOn(verifyWithdraw, 'verify')
    
    await sut.handle(makePayload)
    expect(spy).toHaveBeenCalledWith(makePayload.body.value, findAccountSut.value)
  })
  it('Should expected return notFoundError when draw value is not sufficient ', async () => {
    const { sut, verifyWithdraw } = makeSut()
    jest.spyOn(verifyWithdraw, 'verify').mockReturnValueOnce(new NotFoundError('any_error'))
    
    const httpResponse = await sut.handle(makePayload)
    expect(httpResponse).toEqual(badRequest(new NotFoundError('any_error')))
  })
  it('Should expected call updateAccount with correct parameters ', async () => {
    const { sut, updateAccountSut, findAccountSut, verifyWithdraw } = makeSut()
    const spy = jest.spyOn(updateAccountSut, 'update')
    
    await sut.handle(makePayload)
    expect(spy).toHaveBeenCalledWith({ balance: +verifyWithdraw.withdraw - +verifyWithdraw.balance, userId: makePayload.userId, id: findAccountSut.id })
  })
  it('Should expected return success ', async () => {
    const { sut, updateAccountSut } = makeSut()
    
    const httpResponse = await sut.handle(makePayload)
    expect(httpResponse).toEqual(successResponse({
      id: updateAccountSut.id,
      value: updateAccountSut.value,
      userId: updateAccountSut.userId
    }))
  })
})
