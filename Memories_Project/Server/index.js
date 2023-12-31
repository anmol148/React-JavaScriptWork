import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Postroutes from './routes/posts.js';

const app= express();
app.use('/posts',Postroutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors()); 

const CONNECTION_URL='mongodb+srv://sa:ajoshi94@clusters.nnkluzc.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,UseUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on port${PORT}`)))
.catch((err)=>console.log(err));

//mongoose.set('useFindAndModify',false);