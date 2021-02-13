import express from 'express'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'
import 'reflect-metadata'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
  
export default app
