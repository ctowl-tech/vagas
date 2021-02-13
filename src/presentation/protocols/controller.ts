import { IHttpResponse, IHttpRequest } from './http'

export interface IControllerInterface { 
  handle (httpRequest: IHttpRequest): Promise<IHttpResponse>
}
