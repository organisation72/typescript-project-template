import app from './app'
import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const PORT = Number(process.env.PORT)
const MONGODB_URL = String(process.env.MONGODB_URL)

main().catch(err => { console.error(err) })

async function main (): Promise<void> {
  await mongoose.connect(MONGODB_URL)
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}
