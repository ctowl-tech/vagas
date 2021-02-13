import { UpdateUserUser } from '../../../../src/data/use-cases/user/update/update-user'
import { EncryptStub } from '../../mocks/crypt/crypt'
import { UpdateUserRepositoryStub } from '../../mocks/user/update-user'
import faker from 'faker'

const makeSut = () => {
  const encrypterSut = new EncryptStub()
  const respositorySut = new UpdateUserRepositoryStub()
  const sut = new UpdateUserUser(encrypterSut, respositorySut)
  return { 
    encrypterSut,
    respositorySut,
    sut
  }
}

let makePayload
describe('Register user service test', () => {
  beforeEach(() => {
    makePayload = {
      userId: faker.random.number(99),
      name: faker.name.firstName(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      city: faker.address.city
    }
  })
  it('Should expected call encrypter with user-password and return encoded char', async () => {
    const { encrypterSut, sut } = makeSut()

    const spyOn = jest.spyOn(encrypterSut, 'encrypt')
    await sut.update(makePayload)
    expect(spyOn).toBeCalledWith(makePayload.password)
  })
  it('Should expected throw error if encrypter throws', async () => {
    const { encrypterSut, sut } = makeSut()

    jest.spyOn(encrypterSut, 'encrypt').mockImplementationOnce(() => { throw new Error('valid_error') })
    expect(sut.update(makePayload)).rejects.toThrowError('valid_error')
  })
  it('Should to call repository with correct parameters', async () => {
    const { respositorySut, sut, encrypterSut } = makeSut()

    const spyOn = jest.spyOn(respositorySut, 'update')
    await sut.update(makePayload)
    expect(spyOn).toBeCalledWith({ ...makePayload, password: encrypterSut.hash })
  })
  it('Should expected throw if repository throws', async () => {
    const { respositorySut, sut } = makeSut()

    jest.spyOn(respositorySut, 'update').mockImplementationOnce(() => { throw new Error('valid_error') })
    expect(sut.update(makePayload)).rejects.toThrowError('valid_error')
  })
})
