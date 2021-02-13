import { InvalidParamError } from '../../errors'
import { IValidation } from '../../protocols/validation'

export class CompareFields implements IValidation {
  constructor (private readonly fieldName:string, private readonly fieldToCompare:string) {}
  
  validate (input:any):Error {
    if (input[this.fieldName] !== input[this.fieldToCompare]) {
      return new InvalidParamError(this.fieldToCompare)
    }
  }
}
