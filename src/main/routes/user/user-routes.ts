import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router-adapter'
import { adaptMiddleware } from '../../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../../factories/middlewares/auth-middleware-factory'
import { makeCreateUserFactory } from '../../factories/presentation/users/create/create-user-factory'
import { makeDeleteUserFactory } from '../../factories/presentation/users/delete/delete-user-factory'
import { makeFindUserFactory } from '../../factories/presentation/users/find/find-user-factory'
import { makeUpdateUserFactory } from '../../factories/presentation/users/update/update-user-factory'
 
export default (route: Router):void => {
  route.post('/user', adaptRoute(makeCreateUserFactory()))
  route.put('/user', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeUpdateUserFactory()))
  route.get('/user', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeFindUserFactory()))
  route.delete('/user', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeDeleteUserFactory()))
}
