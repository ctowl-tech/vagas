import { IValidation } from '../../../src/presentation/protocols/validation'

export class ValidationMock implements IValidation {
  validate (input:any):Error {
    return null
  }
}
