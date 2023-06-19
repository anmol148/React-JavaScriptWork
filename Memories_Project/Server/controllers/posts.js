
import PostMessage from '../models/postMessage.js'

export const GetPosts = async (req,res)=>{
    try {
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const CreatePost = async (req,res)=>{
    const body= req.body;
    const newPost= new postMessage(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({errormessage:error.message});
    }
    
}