const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()

app.use(cors())


//middleWare
app.use(bodyParser.json())

//mongoDB connection
mongoose.connect('mongodb://localhost:27017/blogDB').then(()=>{
  console.log('connection successful')
})

//define schema

const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date:String,
  likes:Number
})
const Blog = mongoose.model('Blog',blogSchema)

//routes
app.get('/api/blogs', async(req,res)=>{
  try{
    const blogs= await Blog.find({})
    console.log(blogs)
    res.send(blogs)
  } catch(err){
    res.status(500).json({message:err.message})
  }
})
//update the blog and increment the like of blog
app.patch('/api/blogs/like/:id',async(req,res)=>{
  try{
    const blog = await Blog.findById(req.params.id)
    if(!blog){
      return res.status(404).json({message:'Blog not found'})
    }
    //increment the like of blog
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id,
      { $inc: { likes: 1 } },
      {new:true} //this options it will update the blog 
    );res.json(updateBlog)
  }catch(err){
    res.status(400).json({message:err.message})
  }
})


// post request means save new data to server

app.post('/api/blogs',async (req,res)=>{
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date:req.body.date,
    likes:req.body.likes
   });
   try{
    const newBlog =  await blog.save();
    res.status(200).json(newBlog)
   }catch(err){
    res.status(400).json({message:err.message})
   }
})


//server start 

app.listen(5000,()=>{
  console.log('server is started')
})