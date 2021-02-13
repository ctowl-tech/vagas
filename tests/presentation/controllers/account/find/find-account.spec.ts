import faker from 'faker'
import { FindAccountMock } from '../../../../presentation/mocks/find-account-mock'
import { FindAccountController } from '../../../../../src/presentation/controllers/account/find/read-account'
import { emptyResponse, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'

const makeSut = () => {
  const findAccount = new FindAccountMock()
  const sut = new FindAccountController(findAccount)
  return {
    findAccount,
    sut
  }
}

let makePayload
describe('Find User Controller', () => {
  beforeEach(() => {
    makePayload = {
      userId: faker.random.number(100)
    }
  })
  
  it('Should expected call findAccount with correct params ', async () => {
    const { sut, findAccount } = makeSut()
    const params = jest.spyOn(findAccount, 'find')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.userId)
    expect(findAccount.userId).toEqual(makePayload.userId)
  })

  it('Should expected return serverError when findAccount throws ', async () => {
    const { sut, findAccount } = makeSut()
    jest.spyOn(findAccount, 'find').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })

  it('Should expected return emptyResponse when findAccount return null ', async () => {
    const { sut, findAccount } = makeSut()
    jest.spyOn(findAccount, 'find').mockReturnValueOnce(null)
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(emptyResponse())
  })
  
  it('Should expected return new user', async () => {
    const { sut, findAccount } = makeSut()
    const httpResponse = await sut.handle(makePayload)
    
    expect(httpResponse).toEqual(successResponse({
      id: findAccount.id,
      userId: findAccount.userId,
      value: findAccount.value
    }))
  })
})
