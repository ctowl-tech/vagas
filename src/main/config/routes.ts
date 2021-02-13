import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app:Express):void => {
  const router = Router()
  app.use(router)
  app.use('/api', router)
  readdirSync(`${__dirname}/../routes`).map(async file => {
    (await import(`../routes/${file}/${file}-routes`)).default(router)
  })
}
