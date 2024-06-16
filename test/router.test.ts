import request from 'supertest'

import app from '../src/app'

describe('Test app.ts', () => {
  it('should be able to received response', async () => {
    const res = await request(app).get('/api/ping')

    expect(res.status).toBe(200)
    expect(res.body?.message).toBe('pong')
  })

  it('should be able to received by name', async () => {
    const res = await request(app).get('/api/hello/jidan')

    expect(res.status).toBe(200)
    expect(res.body?.message).toBe('Hello jidan')
  })
})
