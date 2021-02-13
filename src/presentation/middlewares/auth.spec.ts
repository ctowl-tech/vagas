// import { IAccountEntity } from '../../domain/entitys/account-entity'
// import { IVerifyAccountToken } from '../../domain/use-case/auth/load-account-by-token'
// import { AccessDeniedError } from '@presentation/errors'
// import { forbidden, serverError, successResponse } from '@presentation/helpers/http/http-helper'
// import { AuthMiddleware } from './auth'

// const makePayloadRequest = () => ({
//   headers: { 'x-access-token': 'any-token' }
// })
// const makeInvalidPayloadRequest = () => ({
//   headers: { 'x-access-token': '' }
// })
// const makeInvalidWithOutHeaderRequest = () => ({
//   params: {},
//   body: {}
// })

// class DbLoadAccountByToken implements IVerifyAccountToken {
//   async load (accessToken: string, role?: boolean):Promise<IAccountEntity> {
//     return {
//       id: 3,
//       name: 'validName',
//       email: 'validMail',
//       password: 'validPass',
//       isAdmin: false
//     }
//   }
// }
// const makeSut = () => {
//   const dbLoadAccountSut = new DbLoadAccountByToken()
//   const sut = new AuthMiddleware(dbLoadAccountSut)
//   return {
//     dbLoadAccountSut,
//     sut
//   }
// }

// describe('=== AUTH MIDDLEWARE === ', () => {
//   it('shoudl return error if header not pass', async () => {
//     const { sut } = makeSut()
    
//     const httpResponse = await sut.handle(makeInvalidPayloadRequest())
//     expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
//   })
//   it('shoudl return error if header not pass', async () => {
//     const { sut, dbLoadAccountSut } = makeSut()
//     jest.spyOn(dbLoadAccountSut, 'load').mockReturnValue(null)
//     const httpResponse = await sut.handle(makePayloadRequest())
//     expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
//   })
//   it('shoudl return error if header not pass', async () => {
//     const { sut } = makeSut()
//     const httpResponse = await sut.handle(makePayloadRequest())
//     expect(httpResponse).toEqual(successResponse({ accountId: 3 }))
//   })
//   it('shoudl return error if header not pass', async () => {
//     const { sut, dbLoadAccountSut } = makeSut()
//     jest.spyOn(dbLoadAccountSut, 'load').mockImplementationOnce(() => { throw new Error('any_error') })

//     const httpResponse = await sut.handle(makePayloadRequest())
//     expect(httpResponse).toEqual(serverError(new Error('any_error')))
//   })
//   it('shoudl return error if header not pass', async () => {
//     const { sut, dbLoadAccountSut } = makeSut()
//     const params = jest.spyOn(dbLoadAccountSut, 'load')

//     await sut.handle(makePayloadRequest())
//     expect(params).toBeCalledWith(makePayloadRequest().headers['x-access-token'], undefined)
//   })
//   it('shoudl return error if header not pass', async () => {
//     const { sut, dbLoadAccountSut } = makeSut()
//     jest.spyOn(dbLoadAccountSut, 'load').mockImplementationOnce(() => { throw new Error('any_error') })

//     const httpResponse = await sut.handle(makeInvalidWithOutHeaderRequest())
//     expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
//   })
// })
