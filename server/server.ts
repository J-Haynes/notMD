import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import request from 'superagent'

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
    `Cooties`,
    `Konebogetvirus`,
    `Lycanthropy`,
    `Spattergroit`,
    `Malignalitaloptereosis`,
    `Synaptic Seepage`,
    `Wexler's Curtain`,
    `Amoria Phlebitis`,
    `Condiment Dysfunction`,
    `The Suds`,
    `Tooba-Achoobas`,
    `Rotten World Gas`,
  ]
  const index = Math.floor(Math.random() * diseases.length)
  console.log(index)
  res.json({ disease: diseases[index] })
})

server.get('/affirmations', (req, res) => {
  request
    .get('https://www.affirmations.dev/')
    .then((response) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.json({ affirmation: response.body.affirmation })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Failed to fetch affirmation' })
    })
})

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, '/public/index.html'))
})

export default server
