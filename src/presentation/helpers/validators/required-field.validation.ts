import { MissingParamError } from '../../errors'
import { IValidation } from '../../protocols/validation'

export class RequiredFields implements IValidation {
  constructor (private readonly fieldName:string|any) {}
  validate (input:any):Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
