import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';


const Signup = () => {
  const navigate = useNavigate();
  const [email,setemail] = useState('');
  const[pass,setpass]=useState('');
  const[confirmpass,setconfirmpass]= useState('');
  const [error,seterror] = useState('');
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user) {
        navigate('/home')
      }
    })

  },[])

  const handleSumbit = (e)=>{
    e.preventDefault();
    //password not matched
    if(pass!== confirmpass) {
      seterror('passwords not matched')
      return;
    }
    // connect with firebase
    createUserWithEmailAndPassword(auth,email,pass).then((res)=>{
      console.log(res)
    }).catch(()=>{
      console.log('failed to add user')
    })

    // stimulate the register process
    alert('user register successfully')
    // after register redirect  to login page
    navigate('/login')

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form onSubmit={handleSumbit} className='bg-white p-10 border rounded-lg shadow-lg' style={{width:"75%"}}>
      <h2 className='text-2xl font-bold mb-5 '>Sign In</h2>
        <div className='mb-4'>
        <label className='block text-gray-800'>Email:</label>
          <input type='email' required className="border rounded mt-1 p-2 w-full" onChange={(e)=>setemail(e.target.value)}value={email}></input>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-800'>Password:</label>
          <input type='password' required className='mt-1 p-2 border rounded w-full' onChange={(e)=>setpass(e.target.value)} value={pass}></input>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-800'>Confirm Password:</label>
          <input type='password' required className='mt-1 p-2 border rounded w-full' onChange={(e)=>setconfirmpass(e.target.value)} value={confirmpass}></input>
          {error&& <p className='text-red-500 text-sm'>{error}</p>}
        </div>
        <p className='text-blue-600 my-2 cursor-pointer' onClick={()=>navigate('/login')}>Already have an account? Login here</p>
        <button type='submit' className='bg-orange-500 text-white px-4 py-2 border rounded hover:bg-orange-500 font-bold transition duration-200 ease-in-out'>Register</button>
      </form>
    </div>
  )
}

export default Signup