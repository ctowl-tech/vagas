import faker from 'faker'
import { ValidationMock } from '../../../mocks/validation-mock'
import { UpdateUserMock } from '../../../mocks/update-user-mock'
import { MissingParamError } from '../../../../../src/presentation/errors'
import { UpdateUserController } from '../../../../../src/presentation/controllers/user/update/update-user'
import { badRequest, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'

const makeSut = () => {
  const validationSut = new ValidationMock()
  const updateUserSut = new UpdateUserMock()
  const sut = new UpdateUserController(validationSut, updateUserSut)
  return {
    validationSut,
    updateUserSut,
    sut
  }
}

let makePayload
describe('Update User Controller', () => {
  beforeEach(() => {
    makePayload = {
      userId: faker.random.number(100),
      body: {
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        city: faker.address.city()
      }
    }
  })
  it('Should expected return error when validation return errors', async () => {
    const { sut, validationSut } = makeSut()
    jest.spyOn(validationSut, 'validate').mockReturnValueOnce(new MissingParamError('any_param'))
    const httpResponse = await sut.handle(makePayload.body)

    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_param')))
  })
  it('Should expected to call validaton with correct params', async () => {
    const { sut, validationSut } = makeSut()
    const params = jest.spyOn(validationSut, 'validate')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith({ ...makePayload.body, userId: makePayload.userId })
  })

  it('Should expected call updateUserSut with correct params ', async () => {
    const { sut, updateUserSut } = makeSut()
    const params = jest.spyOn(updateUserSut, 'update')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith({ ...makePayload.body, userId: makePayload.userId })
  })

  it('Should expected return serverError when updateUserSut throws ', async () => {
    const { sut, updateUserSut } = makeSut()
    jest.spyOn(updateUserSut, 'update').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })
  
  it('Should expected return new user', async () => {
    const { sut, updateUserSut } = makeSut()
    const httpResponse = await sut.handle(makePayload)

    expect(httpResponse).toEqual(successResponse({ ...makePayload.body, id: updateUserSut.id }))
  })
})
