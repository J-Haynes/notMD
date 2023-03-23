import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

server.get('/diseases', (req, res) => {
  const diseases = [
    `Queen's Lady Plague`,
    `Idiopathic Adolescent Acute Neurodegeneration`,
    `Hemoglophagia`,
    `Cutie Pox`,
    `Diminished Gluteal Syndrome`,
    `Head-go-boom-boom-itis`,
    `Spontaneous Dental Hydroplosion`,
    `Xenopolycythemia`,
    `The Filth`,
    `Unicornitis`,
  ]
  const index = Math.floor(Math.random() * diseases.length)
  console.log(index)
  res.json({ disease: diseases[index] })
})

export default server
