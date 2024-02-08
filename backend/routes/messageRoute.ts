import express from "express"
const routes = express.Router()

import messageController from "../controller/messageController"

routes.post("/conversation", messageController.postConversation)

routes.get('/:userId',messageController.getConversation)

export default routes