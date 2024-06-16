import express, { Application, Request, Response, Router } from 'express'

const app: Application = express()

const r = Router()

r.get('/ping', (_: Request, res: Response) => {
  res.status(200).send({ message: 'pong' })
})

r.get('/hello/:name', (req: Request, res: Response) => {
  const name = req.params?.name || ''
  res.status(200).send({ message: 'Hello ' + name })
})

app.use('/api', r)

app.use((_: Request, res: Response) => {
  res.status(404).json({
    message: '404 api is not found',
  })
})

export default app
