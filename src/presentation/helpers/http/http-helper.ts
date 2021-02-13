
import { ServerError, UnauthorizedError } from '../../errors'
import { IHttpResponse } from '../../protocols' 

export const badRequest = (error:Error):IHttpResponse => ({
  statusCode: 400,
  body: error
})
export const invalidParam = (error:Error):IHttpResponse => ({
  statusCode: 400,
  body: error
})
export const serverError = (error:Error):IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const successResponse = (body):IHttpResponse => ({
  statusCode: 200,
  body
})

export const emptyResponse = ():IHttpResponse => ({
  statusCode: 204,
  body: 'emptyResponse'
})

export const unauthorizedResponse = ():IHttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  body: error
})
