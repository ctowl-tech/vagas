import { InvalidParamError } from '../../errors'
import { EmailValidator } from './email-validation'
import { EmailValidation } from '../../protocols/email-validation'

const makeEmailValidator = (): EmailValidation => {
  class EmailValidatorStub implements EmailValidation { 
    isValid (email:string):boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

let emailValidationSut:EmailValidation
let sut:EmailValidator

describe('Email-validation', () => {
  beforeEach(() => {
    emailValidationSut = makeEmailValidator()
    sut = new EmailValidator('email', emailValidationSut)
  })

  it('Should return error 400 if invalid email is provided', async () => {
    jest.spyOn(emailValidationSut, 'isValid').mockReturnValueOnce(false)

    const httpResponse = await sut.validate({ email: 'valid_email@medina.com.br' })
    await expect(httpResponse).toEqual(new InvalidParamError('valid_email@medina.com.br'))
  })

  it('Email validator throw', async () => {
    jest.spyOn(emailValidationSut, 'isValid').mockImplementationOnce(() => { throw new Error() })

    expect(sut.validate).toThrow()
  })
  
  it('Should call email validator with correct mail', async () => {
    const isValidSpy = jest.spyOn(emailValidationSut, 'isValid')

    await sut.validate({ email: 'valid_email@medina.com.br' })
    await expect(isValidSpy).toHaveBeenCalledWith('valid_email@medina.com.br')
  })
})
