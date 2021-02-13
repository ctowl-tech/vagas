import { Request, Response } from 'express'
import { IControllerInterface, IHttpRequest } from '../../presentation/protocols/index'

export const adaptRoute = (controller:IControllerInterface) => {
  return async (req:Request, res:Response) => {
    const httpRequest:IHttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      userId: req.userId,
      email: req.email
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    }
    return res.status(httpResponse.statusCode).json(httpResponse.body.message)
  }
}
