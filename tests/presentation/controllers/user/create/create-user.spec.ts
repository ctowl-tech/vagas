import { ValidationMock } from '../../../mocks/validation-mock'
import { CreateUserMock } from '../../../mocks/create-user-mock'
import { MissingParamError } from '../../../../../src/presentation/errors'
import { CreateUserController } from '../../../../../src/presentation/controllers/user/create/create-user'
import { badRequest, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'
import faker from 'faker'

const makeSut = () => {
  const validationSut = new ValidationMock()
  const createUserSut = new CreateUserMock()
  const sut = new CreateUserController(validationSut, createUserSut)
  return {
    validationSut,
    createUserSut,
    sut
  }
}

let makePayload
describe('Create User Controller', () => {
  beforeEach(() => {
    makePayload = {
      body: {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        password: faker.internet.password(),
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

  it('Should expected call createUser with correct params ', async () => {
    const { sut, createUserSut } = makeSut()
    const params = jest.spyOn(createUserSut, 'save')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.body)
  })

  it('Should expected return serverError when createUserSut throws ', async () => {
    const { sut, createUserSut } = makeSut()
    jest.spyOn(createUserSut, 'save').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })
  
  it('Should expected return new user', async () => {
    const { sut, createUserSut } = makeSut()
    const httpResponse = await sut.handle(makePayload)

    expect(httpResponse).toEqual(successResponse({ ...makePayload.body, id: createUserSut.id }))
  })
})
