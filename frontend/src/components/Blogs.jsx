import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import auth from '../config/firebase';

const Blogs = () => {
  const [blogs,setBlogs] = useState([]);
  const [newTitle,setNewTitle] = useState('');
  const [newContent,setNewContent]= useState('');
  const [admin,setadmin] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user) { // give admin access for blog creation
        if(user.uid==='dnN7Y6z9SchOpMfB9a6HgRGnu8F2'){
          setadmin(true) //if user is admin give blog access,uid means firebase given

        }else{
          setadmin(false) 
        }
      }
    })


    window.scrollTo(0, 0);
    axios.get("http://localhost:5000/api/blogs").then((res) => {
        console.log(res.data)
        setBlogs(res.data)
    }).catch(() => {
        console.log("Error fetching data")
    })


}, [])

  const handleLike = async (blog_id) => {
    try {
        const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
        // After successfully updating the likes count in the backend, fetch the updated list of blogs
        if (response.status === 200) {
            axios.get("http://localhost:5000/api/blogs").then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })
        }
    } catch (error) {
        console.error('Error liking the blog post:', error);
    }
};


  const handleNewBlogSubmit = (e)=>{
    e.preventDefault();
    const today = new Date();
    const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    const likes = 0
    axios.post("http://localhost:5000/api/blogs",{newTitle,date,newContent,likes}).then((res)=>{
      console.log(res.data)

      axios.get("http://localhost:5000/api/blogs").then((res)=>{
        console.log(res.data)
        setBlogs(res.data)
      }).catch(()=>{
        console.log('Error Fetching data')
      })
    });
    setNewTitle('');
    setNewContent('')
  };
  
  return (
    <div className='blog-section py-14'>
      <h2 className='text-center font-bold mb-14  text-5xl'>Latest <span className='text-orange-800'>Blogs</span>📚</h2>
      {/*blog creation form*/}
      {
        // if admin is true give the blog access
        admin?<div className='blog-creation-form mb-8' style={{width:'80%',margin:"auto"}}>
        <form className='flex flex-col gap-4' onSubmit={handleNewBlogSubmit}>
        <input type='text'placeholder='Blog Title'required className='border rounded p-2'onChange={(e)=> setNewTitle(e.target.value)} value={newTitle}></input>
        <textarea placeholder='Blog content' required className='p-2 border rounded' rows='4' onChange={(e)=>setNewContent(e.target.value)}
          value={newContent}
        ></textarea>
        <button type='submit' className='p-2 rounded bg-orange-400 text-white hover:bg-orange-600'>Add Blog</button>

        </form>
      </div>:''
      }
      
      <div className='blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container px-4 mx-auto'>
        {
          blogs.map((blog)=>(
            <div key={blog._id} className='blog-post mb-8 p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='blog-title font-semibold text-2xl text-gray-800 mb-3'>{blog.newTitle}</h3>
              <p className='blog-date text-gray-400 text-sm mb-4'>{blog.date}</p>
              <p className='blog-content text-gray-600 mb-4'>{blog.newContent}</p>
              <span className='text-blue-500 cursor-pointer' onClick={()=>handleLike(blog._id)}>Like</span>
              <span className='ml-2'>{blog.likes}Likes</span>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Blogs