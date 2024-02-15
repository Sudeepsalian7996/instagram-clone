import { Request, Response } from "express"
import conversationModel from "../model/conversationModel"
import messageModel from "../model/messageModel"

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
        const conversation = await conversationModel.find({
            members: {$in : [userId]}
        })
        res.status(200).json(conversation)
    }catch(err) {
        res.status(500).json({Error: err})
    }
}

const postMessage = async(req: Request, res: Response) => {
    try{
        const newMessage = new messageModel(req.body)
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)

    }catch(err) {
        res.status(500).json({Error:err})
    }
}

const getMessage = async(req: Request, res: Response) => {
    try {
        const conversationId = req.params.conversationId
        const messages = await messageModel.find({
            conversationId: conversationId
        })
        res.status(200).json(messages)

    } catch (error) {
        res.status(500).json({Error:error})
    }
}

export default {
    postConversation,
    getConversation,
    postMessage,
    getMessage
}