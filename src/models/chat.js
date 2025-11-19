import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    id : {type: String, unique:true},
    UserList:{type: Array}
}, { timestamps: true })

export default mongoose.model("Chat", chatSchema)