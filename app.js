import express from 'express'
import cors from 'cors' //Seguridad a las variables de entorno
import dotenv from 'dotenv' //Variables de entorno

import router from './router/router.js'

const port = process.env.PORT || 3000
const host = process.env.host || '0.0.0.0'
dotenv.config({ path: '.env' })

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.get('/', (req, res) => {
    res.send(`Hola Mundo, desde el puerto: ${port}, y el host ${host}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})