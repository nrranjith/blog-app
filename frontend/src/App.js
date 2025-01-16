import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup'


function App() {
  return (
    <div className='bg-white border rounded-md px-5'>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App