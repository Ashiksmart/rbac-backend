import express from 'express'
import { message, getMessages } from '../controllers/messages.js'

const router = express.Router()

router.post('/message', message)
router.get('/messages', getMessages)

export default router