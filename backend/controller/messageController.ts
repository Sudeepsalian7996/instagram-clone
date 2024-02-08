import { Request, Response } from "express"
import conversationModel from "../model/conversationModel"

const postConversation = async(req: Request, res: Response) => {
    try {
        let senderId = req.body.senderId
        let receiverId = req.body.receiverId

        const newConversation = new conversationModel({
            members : [senderId, receiverId]
        })
        const conversationData = await newConversation.save()
        res.status(200).json(conversationData)
    }catch(err) {
        res.status(500).json({Error: err})
    }
}

const getConversation = async(req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        console.log(userId)
        const conversation = await conversationModel.find({
            members: {$in : [userId]}
        })
        res.status(200).json(conversation)
    }catch(err) {
        res.status(500).json({Error: err})
    }
}

export default {
    postConversation,
    getConversation
}