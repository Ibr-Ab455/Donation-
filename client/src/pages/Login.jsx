// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { signInFailure, signInSuccess, sigInStart } from '../Redux/api/UserSlice';
import { useSelector, useDispatch } from 'react-redux';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formDate, setForDate] = useState({});

    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setForDate({ ...formDate, [e.target.id]: e.target.value.trim() });
    }


  
    const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true)
      try {
        dispatch(sigInStart());
          const res = await fetch('/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(formDate),
        });
  
        const data = await res.json();
  
        if(data.success === false){
         dispatch(signInFailure(data.message));
        }

        setLoading(false);

  
        if(res.ok) {
         dispatch(signInSuccess(data))
         toast.success("successfully login😁")
         navigate('/')
        }
        
      } catch (error) {
        dispatch(signInFailure(e.message))
        toast.error("something wrong 404")
       return console.log("err", error)
      }
    }


  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
    
      <div className='w-full'>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="Email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Example@com" required onChange={handleChange}/>
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="********" required onChange={handleChange}/>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <div>
   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? "Loading..." : "Login account"}</button>
  </div>

  <div className='flex gap-2 text-sm mt-5'>
         <span> Haven account?</span>
         <Link to="/register" className='text-blue-500'>
          Register now
         </Link>
        </div>
  
</form>
      </div>
    </div>
  </div>
  )
}

export default Login

