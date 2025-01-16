import React from 'react';
import BlogProfileImage from "../asset/Blog Website Design.jpg";
import CSS from '../asset/css-3.png';
import HTML from '../asset/html.png';
import DB from '../asset/data-server.png';
import JS from '../asset/js.png';
import REACTION from '../asset/physics.png';
import NODE from '../asset/node-js.png';
import P1 from '../asset/p1.jpg';
import P2 from '../asset/p2.png';
import P3 from '../asset/p3.png';
import BlogImage from '../asset/blogImage.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='w-full sm:w-1/2 flex-col justify-center'>
          <h2 className='text-4xl pb-2'>HAY! I AM</h2>
          <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>RANJITH</h2>
          <img src={BlogProfileImage} alt='Blog Profile Image' className='w-60 block sm:hidden'  />
          <p className='py-2'>I can create stunning website for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
          <button className='button-style mt-2'>Hire Me</button>
        </div>
        <div className='justify-center hidden sm:block'>
          <img src={BlogProfileImage} alt='Blog Profile Image' className='w-60 md:w-96 ' />
        </div>
      </div>
      <div className='flex justify-evenly  py-6'>
      <img src={HTML} alt=""  style={{width:"50px"}}/>
      <img src={CSS} alt=""  style={{width:"50px"}}/>
      <img src={JS} alt="" style={{width:"50px"}} />
      <img src={REACTION} alt=""  style={{width:"50px"}}/>
      <img src={DB} alt="" style={{width:"50px"}} />
      <img src={NODE} alt="" style={{width:"50px"}} />
      </div>
      
      <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attahed my Resume here for your Reference</p>
                    <button className='button-style mt-2'>Download CV</button>

                </div>




            </div>
            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className='flex justify-around my-5 flex-col sm:flex-row'>

                    <img src={P1} className='w-64 border rounded-md cursor-pointer' alt="" />

                    <img src={P2} className='w-64 border rounded-md cursor-pointer' alt="" />

                    <img src={P3} className='w-64 border rounded-md cursor-pointer' alt="" />

                </div>
            </div>
            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </div>
            <Footer />


    </div>
  )
}

export default Home