import { InvalidParamError } from '../../errors'
import { EmailValidation } from '../../protocols/email-validation'
import { IValidation } from '../../protocols/validation'

export class EmailValidator implements IValidation {
  constructor (private readonly fieldName:string, private readonly emailValidator:EmailValidation 
  ) {}
  
  validate (input:any):Error {
    if (!(this.emailValidator.isValid(input[this.fieldName]))) {
      return new InvalidParamError(input[this.fieldName])
    }
  }
}
