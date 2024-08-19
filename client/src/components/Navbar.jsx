// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Dropdown,  } from 'flowbite-react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Navbar() {

 const location = useLocation();
 const navigate = useNavigate();


 const { currentUser } = useSelector(state => state.user);
    

    const handleactive = (route) => {
        if(route === location.pathname) {
          return true
         }
     }


  return (
    <nav className='border-b-2'>
        <div className='flex justify-between h-14 p-2 mx-auto max-w-5xl'>

            <Link to="/">
            
            <h2 className='px-2 py-1 text-3xl text-[#010100]'>Donation
            </h2>
          
           </Link>
    

         <div className='pt-2'>
           <ul className='flex space-x-4'>
            
            <Link to="/">
             <li className={`text-[18px] text-[#010100] ${ handleactive("/") && 'text-[#FD7F20]'}`} onClick={() => navigate("/")}>Home</li>
            
            </Link>

            <Link to="/about">
            <li className={`text-[18px] text-[#010100] ${ handleactive("/about") && 'text-[#FD7F20]'}`} onClick={() => navigate("/about")}>About</li>
            </Link>

            <Link to="/work">
            <li className={`text-[18px] text-[#010100] ${ handleactive("/work") && 'text-[#FD7F20]'}`} onClick={() => navigate("/work")}>Work</li>
            </Link>
           </ul>
         </div>
        
        <div className='flex'>
           
            
             
             { currentUser ? (
              <Dropdown
              arrowIcon={false} 
              inline
              label={
                <Avatar 
                alt='user'
                img={currentUser.profilePicture} rounded/>
              }>

                <Dropdown.Header>
                  <span className='block text-sm'>@{currentUser.username}</span>
                  <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                 <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Item>Log out</Dropdown.Item>

              </Dropdown>
             ): 
              (
                <Link to="/login">
                <Button gradientDuoTone="purpleToBlue" outline>
                
                  Log In
                </Button>
                </Link>
              
             )

             }
             
           
        </div>
        </div>
       
    </nav>
  )
}

export default Navbar