import express from "express"
const routes = express.Router()

import messageController from "../controller/messageController"

routes.post("/conversation", messageController.postConversation)

routes.get('/conversation/:userId',messageController.getConversation)

routes.post('/chat', messageController.postMessage)

routes.get('/:conversationId', messageController.getMessage)

export default routes