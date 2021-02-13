import faker from 'faker'
import { DeleteUserMock } from '../../../../presentation/mocks/delete-user-mock'
import { serverError, successResponse } from '../../../../../src/presentation/helpers/http/http-helper'
import { DeleteUserController } from '../../../../../src/presentation/controllers/user/delete/delete-user'

const makeSut = () => {
  const deleteUserSut = new DeleteUserMock()
  const sut = new DeleteUserController(deleteUserSut)
  return {
    deleteUserSut,
    sut
  }
}

let makePayload
describe('Delete User Controller', () => {
  beforeEach(() => {
    makePayload = {
      userId: faker.random.number(100)
    }
  })
 
  it('Should expected call deleteUserSut with correct params ', async () => {
    const { sut, deleteUserSut } = makeSut()
    const params = jest.spyOn(deleteUserSut, 'delete')
    await sut.handle(makePayload)

    expect(params).toHaveBeenCalledWith({ id: makePayload.userId })
  })

  it('Should expected return serverError when deleteUserSut throws ', async () => {
    const { sut, deleteUserSut } = makeSut()
    jest.spyOn(deleteUserSut, 'delete').mockImplementation(() => { throw new Error('validError') })
    
    const httpRequest = await sut.handle(makePayload)
    expect(httpRequest).toEqual(serverError(new Error('validError')))
  })
  
  it('Should expected success', async () => {
    const { sut, deleteUserSut } = makeSut()
    const httpResponse = await sut.handle(makePayload)

    expect(httpResponse).toEqual(successResponse('Client has been removed'))
  })
})
