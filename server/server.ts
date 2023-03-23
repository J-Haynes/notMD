import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

server.get('/greeting', (req, res) => {
  const greetings = ['fake disease 1', 'fake disease 2', 'fake disease 3']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

export default server
