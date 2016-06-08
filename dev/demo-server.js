import express from 'express'
const app = express()
const cwd = process.cwd()

app
  .use('/owl-ui', express.static(`${cwd}/demo`))
  .listen(3030, ()=> {
    console.log(`Demo server is running on: 0.0.0.0:3030/owl-ui`)
  })
