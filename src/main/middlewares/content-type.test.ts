import { Request, Response } from 'express'
import request from 'supertest'

import app from '../config/app'

describe('Content type middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test-content', (req:Request, res:Response) => {
      res.send()
    })

    await request(app)
      .get('/test-content')
      .expect('content-type', /json/)
  })
})
