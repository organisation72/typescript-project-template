import express, { type Express, type Request, type Response } from 'express'
import postRoute from './routes/post.route'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/posts', postRoute)

export default app
