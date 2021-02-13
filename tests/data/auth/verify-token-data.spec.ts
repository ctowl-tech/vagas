import { VerifyAuthToken } from '../../../src/data/use-cases/authenticate/verify-token-data'
import { FindUserRepositoryMock } from '../mocks/user/find-user'
import { DecrypterStub } from '../mocks/decrypt/decrypter'

const makeSut = () => {
  const decrypterSut = new DecrypterStub()
  const loadAccountByTokenRepositorySpy = new FindUserRepositoryMock()
  const sut = new VerifyAuthToken(decrypterSut, loadAccountByTokenRepositorySpy)
  return {
    sut,
    decrypterSut,
    loadAccountByTokenRepositorySpy
  }
}

describe('DbLoadAccountByToken Usecase', () => {
  it('Should call Decrypter with correct values', async () => {
    const { sut, decrypterSut } = makeSut()
    const decrypterSpy = jest.spyOn(decrypterSut, 'decrypt') 
    await sut.load('hashPass')
    expect(decrypterSpy).toBeCalledWith('hashPass')
  })
  it('Should call Decrypter and receveid null', async () => {
    const { sut, decrypterSut } = makeSut()
    jest.spyOn(decrypterSut, 'decrypt').mockReturnValue(null) 
    const response = await sut.load('hashPass')
    expect(response).toBe(null)
  })
  it('Should receveid throw from decrypter', async () => {
    const { sut, decrypterSut } = makeSut()
    jest.spyOn(decrypterSut, 'decrypt').mockImplementationOnce(() => { throw new Error() }) 
    const response = await sut.load('hashPass')
    expect(response).toBe(null)
  })
  it('Should receveid throw from loadById', async () => {
    const { sut, loadAccountByTokenRepositorySpy } = makeSut()
    jest.spyOn(loadAccountByTokenRepositorySpy, 'find').mockImplementationOnce(() => { throw new Error() }) 
    const response = await sut.load('hashPass')
    expect(response).toBe(null)
  })
 
  it('Should receveid user model', async () => {
    const { sut } = makeSut()
    const response = await sut.load('hashPass')
    expect(response.id).toBeTruthy()
    expect(response.name).toBeTruthy()
    expect(response.password).toBeTruthy()
    expect(response.email).toBeTruthy()
  })
})
