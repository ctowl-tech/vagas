import { Request, Response } from 'express'
import request from 'supertest'

import app from '../config/app'

describe('Cors middleware', () => {
  test('Should enabled cors', async () => {
    app.get('/test-cors', (req:Request, res:Response) => {
      res.send()
    })

    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
