import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router-adapter'
import { adaptMiddleware } from '../../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/auth-middleware-factory'
import { makeCreateAccountFactory } from '../../factories/presentation/account/create/create-account-factory'
import { makeUpdateAccountFactory } from '../../factories/presentation/account/update/update-account-factory'
import { makeFindAccountFactory } from '../../factories/presentation/account/find/find-account-factory'
 
export default (route: Router):void => {
  route.post('/account', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeCreateAccountFactory()))
  route.put('/account', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeUpdateAccountFactory()))
  route.get('/account', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeFindAccountFactory()))
}
