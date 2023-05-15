import { type Request, type Response } from 'express'
import Post from '../models/Post'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getPosts = async (_req: Request, res: Response) => {
  try {
    const query = Post.find({})
    const posts = await query.exec()
    res.send(posts)
  } catch (error) {
    res.sendStatus(500)
  }
}
