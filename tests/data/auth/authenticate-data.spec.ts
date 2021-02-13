
import { AuthenticationData } from '../../../src/data/use-cases/authenticate/authenticate-data'
import { CompareStub } from '../mocks/decrypt/compare'
import { FindUserPerMailRepositoryMock } from '../mocks/user/find-user-per-mail'
import { JWTAdapterStub } from '../mocks/crypt/jwt-crypt'
import faker from 'faker'

let makePayload
const makeSut = () => {
  const accountSut = new FindUserPerMailRepositoryMock()
  const encryptSut = new CompareStub()
  const jwtSut = new JWTAdapterStub()
  const sut = new AuthenticationData(encryptSut, accountSut, jwtSut)
  return {
    sut, 
    encryptSut,
    accountSut,
    jwtSut
  }
}

describe('=== Authenticate Data ===', () => {
  beforeEach(() => {
    makePayload = {
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  })
  it('Should be expected to throw if find user throw', async () => {
    const { accountSut, sut } = makeSut()

    jest.spyOn(accountSut, 'findUserByMail').mockImplementationOnce(() => { throw new Error('any_error') })
    expect(sut.auth(makePayload)).rejects.toThrow()
  })
  it('Should be expected return unauthorized if wrong mail is provider', async () => {
    const { accountSut, sut } = makeSut()

    jest.spyOn(accountSut, 'findUserByMail').mockReturnValueOnce(null)

    const response = await sut.auth(makePayload)
    expect(response).toEqual(null)
  })
  it('Verify paremeters pass to compare password', async () => {
    const { encryptSut, sut } = makeSut()

    const passwordSpy = jest.spyOn(encryptSut, 'compare')

    await sut.auth(makePayload)
    expect(passwordSpy).toBeCalledWith(makePayload.password, encryptSut.hashEncrypt)
  })
  it('return error if wrong password is provider', async () => {
    const { encryptSut, sut } = makeSut()

    jest.spyOn(encryptSut, 'compare').mockReturnValueOnce(new Promise(resolve => resolve(false)))

    const response = await sut.auth(makePayload)
    expect(response).toBe(null)
  })
  it('expected throw if jwt throws', async () => {
    const { jwtSut, sut } = makeSut()

    jest.spyOn(jwtSut, 'hashGenerate').mockImplementationOnce(() => { throw new Error('any_error') })

    expect(sut.auth(makePayload)).rejects.toThrow()
  })
  it('return error if wrong password is provider', async () => {
    const { sut, jwtSut, accountSut } = makeSut()

    const response = await sut.auth(makePayload)
    expect(response).toEqual({
      accessToken: jwtSut.hash,
      name: accountSut.name
    })
  })
})
