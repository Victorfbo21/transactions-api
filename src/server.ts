import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import dbConnect from './Config/dbConfig'
import { Router, Request, Response } from 'express';
import Routers from './Routes';

config({
    path: '.env'
})
const app = express();
const port = process.env.PORT
const route = Router()

app.use(express.json())
app.use(Routers)
app.use(cors())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
})

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Ouvindo em http://localhost:${port}`)
    })
}).catch(err => console.error('Error on db connect', err))

