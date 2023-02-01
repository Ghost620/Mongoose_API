import mongoose from "mongoose";

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    start: {type: Date, required: true},
    end: {type: Date, required: true},
    desc: {type: String, required: true},
})

const PostSchema = mongoose.model('Models', Post)

export default PostSchema;