import app from './app'

const port = Number(process.env.PORT)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
