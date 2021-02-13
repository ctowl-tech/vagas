import { RequiredFields } from '../../../../presentation/helpers/validators'
import { ValidationComposite } from '../../../../presentation/helpers/validators/validation-composite'
import { IValidation } from '../../../../presentation/protocols/validation'

export const makeLogInValidation = ():ValidationComposite => {
  const validations:IValidation[] = []
  
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFields(field))
  }

  return new ValidationComposite(validations)
}
