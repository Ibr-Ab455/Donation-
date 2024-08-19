// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function Register() {

    const navigate = useNavigate();
 

    const [formDate, setForDate] = useState({});

    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setForDate({ ...formDate, [e.target.id]: e.target.value.trim() });
    }


  
    const handleSubmit = async (e) => {
      e.preventDefault();

      setLoading(true)
      try {
          const res = await fetch('/api/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(formDate),
        });
  
        const data = await res.json();
  
        if(data.success === false){
        toast.error("something wrong 404")
          return console.log(data.message)
        }

        setLoading(false);

  
        if(res.ok) {
        toast.success("Register successfully")
          navigate('/login')
        }
        
      } catch (error) {
        setLoading(false)
        toast.error("Please try again")
       return console.log("err", error)
      }
    }


  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className=''>
      <Link to="/">
          
          <h2 className='px-2 py-1 text-4xl text-[#010100]'>Ibra
          <span className='text-4xl text-[#FD7F20]'>Nett</span>
          </h2>
        
         </Link>
         <p className='text-sm mt-2 font-bold'>This is a project. You can sign up with your email and password or with Google</p>
      </div>
      {/* right */}
      <div className='w-full'>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required onChange={handleChange}/>
  </div>
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
   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? "wait for Registering..." : "Register new account"}</button>
  </div>

  <div className='flex gap-2 text-sm mt-5'>
         <span> Have an account?</span>
         <Link to="/login" className='text-blue-500'>
          Log In
         </Link>
        </div>
  
</form>
      </div>
    </div>
  </div>
  )
}

export default Register

