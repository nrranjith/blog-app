import React, { useEffect, useState } from 'react';
import{Link, useNavigate} from 'react-router-dom';
import './Navbar.css'
import auth from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const [log,setlog] = useState(false) // this one for after user log in 

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setlog(true)
        console.log("user log in")
      }else{
        setlog(false)
        console.log('user logout')
      }
    })
    },[])
    const logout = ()=>{
      signOut(auth)
    }
  return (
    <div className='py-5 flex justify-between items-center'>
      <h2 className='text-2xl font-bold'>Personal</h2>
      <div className='flex items-center'>
        <Link className='list-none px-5' to={'/home'}>Home</Link>
        <Link className='px-5 list-none'to={'/blogs'}>Blogs</Link>
        <Link className='px-5 list-none'>About</Link>
        {
          log? <button className='button-style hidden md:block' onClick={logout}>Log Out</button>:<button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>
        }



        
       
      </div>
      </div>
  )
}

export default Navbar