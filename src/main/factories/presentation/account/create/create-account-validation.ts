import { RequiredFields, RestrictFields } from '../../../../../presentation/helpers/validators'
import { ValidationComposite } from '../../../../../presentation/helpers/validators/validation-composite'
import { IValidation } from '../../../../../presentation/protocols/validation'

export const makeAccountValidation = ():ValidationComposite => {
  const validations:IValidation[] = []

  const acceptedFields = [
    'userId',
    'value'
  ]

  for (const field of acceptedFields) {
    validations.push(new RequiredFields(field))
  }

  validations.push(new RestrictFields(acceptedFields))

  return new ValidationComposite(validations)
}
