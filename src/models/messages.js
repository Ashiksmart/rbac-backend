import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    userId: { type: String, unique: true, required: true },
    chatId: { type: String, unique: true, required: true },
    content: String,
    status: {
        type: String,
        enum: ['sent', 'seen'],
        required: true
    }
}, { timestamps: true })


export default mongoose.model("Message", messageSchema)