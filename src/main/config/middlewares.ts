import { Express } from 'express'
import { contentType, cors, expressJson } from '../middlewares'

export default (app:Express):void => {
  app.use(contentType)
  app.use(cors)
  app.use(expressJson)
}
