//importing external packages
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

//importing functions created
import user from './routes/userRoute'
import message from "./routes/messageRoute"

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/users', user)
app.use('/message', message)

//connection to database and the app running
mongoose.connect(process.env.mongodbUrl)
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log('mongoose connection error:',err)
})

