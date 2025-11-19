import Chat from '../models/chat.js'
import Joi from 'joi'

const chatList = async (req, res) => {
    const schema = Joi.object({
        id: Joi.string().min(3).max(30).required(),
        userList: Joi.array().required(),
    })
    const  { error, value } = schema.validate(req.body)
    const {id, userList} = value
    if(error) return res.status(400).json({message: error.message})
    await Chat.create({id, userList})
    res.json({value})
}
export { chatList }