// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full h-screen'>
      <div className='form-content flex items-center justify-center py-10'>
         <form className='flex flex-col gap-4 w-[40%] p-6 bg-[#010100]'>
            <h1 className='text-white text-2xl'>Login to your account</h1>
            <hr/>
           
            <div className='flex flex-col gap-1'>
            <label className='text-sm text-gray-500'>Email</label>
             <input type='email' placeholder='Example.com' className='w-[80%] border-1 rounded border-gray-500 outline-none p-2'/>
            </div>

            <div className='flex flex-col gap-1'>
            <label className='text-sm text-gray-500'>Password</label>
             <input type='password' placeholder='********' className='w-[80%] border-1 rounded border-gray-500 outline-none p-2'/>
            </div>
            
            <button className='bg-[#fc2e20] w-[80%] rounded p-2 text-white text-xl cursor-pointer font-serif font-normal'>Register</button>
            <div>
                <span className='text-white'>Dont't have an account ? <Link to="/" className='text-blue-600'>Register</Link></span>
            </div>
         </form>
        </div>
    </div>
  )
}

export default Login