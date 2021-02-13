// import { Validation, Authentication, AuthenticationParams, AuthenticationModel } from './login-protocols'
// import { LoginController } from './login-controller'
// import { InvalidParamError, UnauthorizedError } from '@presentation/errors'
// import { badRequest } from '@presentation/helpers/http/http-helper'
// import { mockSignInPostRequest } from '@presentation/tests/requests'
// import { AuthenticationStub, ValidatorStub } from '@presentation/tests'

// interface SutTypes {
//   validatorSut: Validation
//   sut:LoginController,
//   authSut:Authentication
// }

// const makeSut = ():SutTypes => {
//   const validatorSut = new ValidatorStub()
//   const authSut = new AuthenticationStub()
//   const sut = new LoginController(validatorSut, authSut)
//   return {
//     validatorSut,
//     authSut,
//     sut
//   }
// }

// describe('=== Login Controller ===', () => {
//   it('Should return error if invalid email have been passed', async () => {
//     const { sut, validatorSut } = makeSut()
//     const payload = mockSignInPostRequest()

//     jest.spyOn(validatorSut, 'validate').mockReturnValue(new InvalidParamError('email'))
//     const httpResponse = await sut.handle(payload)
//     expect(httpResponse).toEqual(badRequest(new InvalidParamError('email')))
//   })
//   it('Should be expected to parameters is correctect been passed', async () => {
//     const { sut, validatorSut } = makeSut()
//     const payload = mockSignInPostRequest()

//     const validateParameters = jest.spyOn(validatorSut, 'validate')
//     await sut.handle(payload)
//     expect(validateParameters).toHaveBeenCalledWith(payload.body)
//   })
//   it('Should be expected to call authentication method', async () => {
//     const { sut, validatorSut } = makeSut()
//     const payload = mockSignInPostRequest()

//     const validateParameters = jest.spyOn(validatorSut, 'validate')
//     await sut.handle(payload)
//     expect(validateParameters).toHaveBeenCalledWith(payload.body)
//   })
//   it('Should be expected to call authentication method', async () => {
//     const { sut, authSut } = makeSut()
//     const payload = mockSignInPostRequest()

//     const validateParameters = jest.spyOn(authSut, 'auth')
//     await sut.handle(payload)
//     expect(validateParameters).toHaveBeenCalledWith(payload.body)
//   })
//   it('Should be expected throw if auth throws', async () => {
//     const { authSut, sut } = makeSut()
//     const payload = mockSignInPostRequest()

//     jest.spyOn(authSut, 'auth').mockImplementationOnce(() => { throw new Error('any_error') })
//     expect(sut.handle(payload)).rejects.toThrow()
//   })
//   it('Should be expected to return unauthorized if auth not been completed', async () => {
//     const { authSut, sut } = makeSut()
//     const payload = mockSignInPostRequest()

//     jest.spyOn(authSut, 'auth').mockReturnValue(null)
  
//     const httpResponse = await sut.handle(payload)
//     expect(httpResponse.statusCode).toBe(401)
//     expect(httpResponse.body).toEqual(new UnauthorizedError())
//   })

//   it('Should be expected to return success', async () => {
//     const { sut } = makeSut()
//     const payload = mockSignInPostRequest()
  
//     const httpResponse = await sut.handle(payload)
//     expect(httpResponse.statusCode).toBe(200)
//     expect(httpResponse.body.accessToken).toBeTruthy()
//     expect(httpResponse.body.name).toBeTruthy()
//   })
// })
