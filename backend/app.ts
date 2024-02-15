//importing external packages
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { Server, Socket } from 'socket.io';

//importing functions created
import user from './routes/userRoute'
import message from "./routes/messageRoute"

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/users', user)
app.use('/messages', message)

//connection to database and the app running
mongoose.connect(process.env.mongodbUrl)
.then(() => {
    console.log('mongodb connected!')
})
.catch((err) => {
    console.log('mongoose connection error:',err)
})

const server = app.listen(3000)

const io = new Server(server, {
    pingTimeout: 80000,
    cors: {
      origin: process.env.frontendUrl,
    },
  });

io.on('connection', (socket) => {
    console.log('user connected')
    socket.emit('dummy','server side is connected op!')
})



