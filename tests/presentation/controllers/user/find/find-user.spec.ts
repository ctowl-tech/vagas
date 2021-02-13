import faker from 'faker'
import { FindUserMock } from '../../../../presentation/mocks/find-user-mock'
import { FindUserController } from '../../../../../src/presentation/controllers/user/find/find-user'
import { emptyResponse, serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'

const makeSut = () => {
  const findUserSut = new FindUserMock()
  const sut = new FindUserController(findUserSut)
  return {
    findUserSut,
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
  
  it('Should expected call findUserSut with correct params ', async () => {
    const { sut, findUserSut } = makeSut()
    const params = jest.spyOn(findUserSut, 'find')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith(makePayload.userId)
    expect(findUserSut.id).toEqual(makePayload.userId)
  })

  it('Should expected return serverError when findUserSut throws ', async () => {
    const { sut, findUserSut } = makeSut()
    jest.spyOn(findUserSut, 'find').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })

  it('Should expected return emptyResponse when findUserSut return null ', async () => {
    const { sut, findUserSut } = makeSut()
    jest.spyOn(findUserSut, 'find').mockReturnValueOnce(null)
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(emptyResponse())
  })
  
  it('Should expected return new user', async () => {
    const { sut, findUserSut } = makeSut()
    const httpResponse = await sut.handle(makePayload)
    
    expect(httpResponse).toEqual(successResponse({
      address: findUserSut.address,
      city: findUserSut.city,
      email: findUserSut.email,
      name: findUserSut.name,
      password: findUserSut.password,
      id: findUserSut.id
    }))
  })
})
