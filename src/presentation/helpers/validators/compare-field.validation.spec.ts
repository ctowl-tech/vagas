import { InvalidParamError } from '../../errors'
import { CompareFields } from './compare-field.validation'

let sut:CompareFields

describe('Compare-fields', () => {
  beforeEach(() => {
    sut = new CompareFields('password', 'repeatPassword')
  })

  it('Should call validators with incorrect payload', async () => {
    const payload = { password: 'senha-valida', repeatPassword: 'senha-invalida' }

    const response = await sut.validate(payload)
    await expect(response).toEqual(new InvalidParamError('repeatPassword'))
  })
  it('Should call validators with correct payload', async () => {
    const payload = { password: 'senha-valida', repeatPassword: 'senha-valida' }
    const response = await sut.validate(payload)
    await expect(response).toBe(undefined)
  })
})
