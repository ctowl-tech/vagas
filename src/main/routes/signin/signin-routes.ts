import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router-adapter'
import { makeLoginFactory } from '../../factories/presentation/auth/generate-auth-factory'
 
export default (route: Router):void => {
  route.post('/signin', adaptRoute(makeLoginFactory()))
}
