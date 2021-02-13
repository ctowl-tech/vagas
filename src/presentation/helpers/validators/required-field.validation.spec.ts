import { MissingParamError } from '../../errors'
import { RequiredFields } from './required-field.validation'

let sut:RequiredFields

describe('Compare-fields', () => {
  beforeEach(() => {
    sut = new RequiredFields('password')
  })

  it('Should call validators with incorrect payload', async () => {
    const payload = { repeatPassword: 'senha-invalida' }

    const response = await sut.validate(payload)
    await expect(response).toEqual(new MissingParamError('password'))
  })
  it('Should call validators with correct payload', async () => {
    const payload = { password: 'senha-valida', repeatPassword: 'senha-valida' }

    const response = await sut.validate(payload)
    await expect(response).toBe(undefined)
  })
})
