import faker from 'faker'
import { ValidationMock } from '../../../mocks/validation-mock'
import { MissingParamError, NotFoundError } from '../../../../../src/presentation/errors'
import { FindUserMock } from '../../../../presentation/mocks/find-user-mock'
import { CreateAccountMock } from '../../../../presentation/mocks/create-account-mock'
import { CreateAccountController } from '../../../../../src/presentation/controllers/account/create/create-account'
import { badRequest, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'

const makeSut = () => {
  const validationSut = new ValidationMock()
  const createAccountSut = new CreateAccountMock()
  const findAccountSut = new FindUserMock()
  const sut = new CreateAccountController(validationSut, findAccountSut, createAccountSut)
  return {
    validationSut,
    createAccountSut,
    findAccountSut,
    sut
  }
}

let makePayload
describe('Create User Controller', () => {
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

    expect(params).toHaveBeenCalledWith({ ...makePayload.body, userId: makePayload.userId })
  })

  it('Should expected call createUser with correct params ', async () => {
    const { sut, findAccountSut } = makeSut()
    const params = jest.spyOn(findAccountSut, 'find')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.userId)
  })

  it('Should expected return serverError when createUserSut throws ', async () => {
    const { sut, findAccountSut } = makeSut()
    jest.spyOn(findAccountSut, 'find').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })

  it('Should expected return serverError when createUserSut throws ', async () => {
    const { sut, findAccountSut } = makeSut()
    jest.spyOn(findAccountSut, 'find').mockReturnValueOnce(null)
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(badRequest(new NotFoundError('User not found')))
  })

  it('Should expected return serverError when createUserSut throws ', async () => {
    const { sut, createAccountSut } = makeSut()
    const params = jest.spyOn(createAccountSut, 'save')    
    await sut.handle(makePayload)
    expect(params).toHaveBeenCalledWith({ ...makePayload.body, userId: makePayload.userId })
  })
  
  it('Should expected return new user', async () => {
    const { sut, createAccountSut } = makeSut()
    const httpResponse = await sut.handle(makePayload)
    
    expect(httpResponse).toEqual(successResponse({ 
      id: createAccountSut.id,
      userId: createAccountSut.userId,
      value: createAccountSut.value
    }))
  })
})
