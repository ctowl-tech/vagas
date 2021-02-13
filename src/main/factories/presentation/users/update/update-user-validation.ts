import { RequiredFields, RestrictFields } from '../../../../../presentation/helpers/validators'
import { ValidationComposite } from '../../../../../presentation/helpers/validators/validation-composite'
import { IValidation } from '../../../../../presentation/protocols/validation'

export const makeUserValidation = ():ValidationComposite => {
  const validations:IValidation[] = []

  const acceptedFields = [
    'name',
    'address',
    'city'
  ]

  for (const field of acceptedFields) {
    validations.push(new RequiredFields(field))
  }

  return new ValidationComposite(validations)
}
