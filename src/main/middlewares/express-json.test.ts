import { Request, Response } from 'express'
import request from 'supertest'

import app from '../config/app'

describe('BodyParser middleware', () => {
  test('Should verify body as json', async () => {
    app.post('/test-parser', (req:Request, res:Response) => {
      res.send({ name: req.body.name })
    })

    await request(app)
      .post('/test-parser')
      .send({ name: 'teste' })
      .expect({ name: 'teste' })
  })
})
