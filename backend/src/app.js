import 'dotenv/config.js'
import cors  from 'cors'
import express from 'express'

const servidor= express()
servidor.use(express.json())
servidor.use(cors())

import AdicionarRotas from './rotas.js'

AdicionarRotas(servidor)

servidor.listen(process.env.PORT, ()=> console.log(`---> A API SUBIU NA PORTA ${process.env.PORT} `));