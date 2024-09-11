import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'

import { router } from './router'
import { AppDataSource } from './data-source'
import { createServer } from 'http'

const app = express()

const server = createServer()
app.use(express.json())

app.use('/api', router)

app.use((req, res) => {
  res.status(404).json({
    error: 404,
    msg: 'Endpoint not found'
  })
})

server.on('request', app)
server.listen(process.env.PORT)

console.log('****************************')
console.log('*    Backend')
console.log(`*    Port: ${process.env.PORT}`)

AppDataSource.initialize()
  .then(async () => {
    console.log('*    DB: connected')
  })
  .catch(error => { console.log(error) })
