import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import Post from './mongodb/schema.js'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('HELLO FROM HERE!')
})

app.post('/post', async (req, res) => {
    try {
        const { title, start, end, desc } = req.body;
    
        const newPost = await Post.create({
            title, 
            start,
            end,
            desc
        })
    
        res.status(201).json({ success: true, data: newPost })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})


const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
    }
    
    app.listen(8080, () => console.log('Server listening on port http://localhost:8080'))

}
startServer();