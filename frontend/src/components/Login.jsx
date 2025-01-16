import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [err,seterr] = useState()	
  useEffect(() => {
    window.scrollTo(0, 0);
    // if user already logged in im redirect to home page and dont show aggin login button
    auth.onAuthStateChanged((user)=>{
      if(user) {
        navigate('/home')
      }
    })
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    // using fire base

    signInWithEmailAndPassword(auth,email,pass).then((res)=>{
        // redirect to home page
    navigate("/home");
   }).catch(()=>{
      seterr('you do not have account please signup ')
    })
   
  
  };
  return (
    <div className="flex justify-center items-center bg-gray-100  h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-lg shadow-md"
        style={{ width: "75%" }}
      >
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        <div className="mb-5">
          <label className="block text-gray-800">Email:</label>
          <input
            type="email"
            required
            className="mt-1 p-2 w-full border rounded"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
        </div>
        <div className="mb-2">
          <label className="block text-gray-800">Password:</label>
          <input
            type="password"
            required
            className="mt-1 p-2 w-full border rounded"
            onChange={(e) => setpass(e.target.value)}
            value={pass}
          ></input>
        </div>
        <p
          className="text-red-600 my-2 cursor-pointer" >
          {err}
        </p>
        <p
          className="text-blue-600 my-2 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          New User? Register Here
        </p>
        <button
          type="submit"
          className="bg-blue-500 border rounded text-white py-2 px-4 hover:bg-blue-600 font-bold transition duration-200 ease-in-out "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
