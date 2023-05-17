import express from 'express'
import { getPosts } from '../controllers/post'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', getPosts)

export default router
