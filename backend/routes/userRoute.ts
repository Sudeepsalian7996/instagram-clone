import express from "express"
const routes = express.Router()

import userController from "../controller/userController"

routes.post("/signup",userController.signup)

// routes.post("/signin",userController.signin)

export default routes