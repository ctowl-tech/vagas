import { InvalidParamError } from '../../errors'
import { RestrictFields } from './restrict-field.validation'

let sut:RestrictFields

describe('Restrict-fields', () => {
  beforeEach(() => {
    sut = new RestrictFields(['studentId', 'planId'])
  })

  it('Should call validators with incorrect payload', async () => {
    const payload = { studentId: 'senha-valida', planId: 'senha-invalida', notValidParam: 'notValid', notToParam: 'notValid' }

    const response = await sut.validate(payload)
    await expect(response).toEqual(new InvalidParamError('notToParam,notValidParam'))
  })
  it('Should call validators with correct payload', async () => {
    const payload = { studentId: 'senha-valida', planId: 'senha-invalida' }
    const response = await sut.validate(payload)
    await expect(response).toBe(undefined)
  })
})
