import { MissingParamError } from '../../errors'
import { ValidationComposite } from './validation-composite'
import { IValidation } from '../../protocols/validation'

class Validate implements IValidation {
  validate (input:any):Error {
    return undefined
  }
}

let sut:ValidationComposite
let validateSut:Validate
let payload:{}

describe('Compare-fields', () => {
  beforeEach(() => {
    payload = { password: 'senha-valida', repeatPassword: 'senha-valida' }
    validateSut = new Validate()
    sut = new ValidationComposite([validateSut])
  })
  it('Should call validators with incorrect payload', async () => {
    jest.spyOn(validateSut, 'validate').mockReturnValue(new MissingParamError('password'))

    const response = await sut.validate(payload)
    await expect(response).toEqual(new MissingParamError('password'))
  })
  it('Should call validators with correct payload', async () => {
    const response = await sut.validate(payload)
    await expect(response).toBe(undefined)
  })
})
