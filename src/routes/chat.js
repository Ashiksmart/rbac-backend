import express from 'express'
import { chatList } from '../controllers/chat.js'

const router = express.Router()

router.post('/chat', chatList)

export default router