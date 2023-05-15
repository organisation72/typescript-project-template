import supertest from 'supertest'
import app from './app'

describe('app', () => {
  test('GET /', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
  })
})
