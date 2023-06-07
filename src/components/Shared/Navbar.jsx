import { Fragment, useState } from 'react';
import logo from '../../assets/logo99.png'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
// import CompanyLogo from '../assets/Union.svg'

import loginPhoto from '../../assets/login.png'
import "./navbar.css"

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalStatus, setModalStatus] = useState(false);
   const menuItems = <Fragment>
    
       <Link to='/'> <li className='cursor-Pointer nav hover:text-[#F10B65]'>Offer List</li></Link>
       <Link to='/'><li className='cursor-Pointer nav hover:text-[#F10B65]'>Blog</li></Link> 
       {/* <Link to='/'> <li className='cursor-Pointer nav hover:text-[#F10B65]'>Claim Cashback</li></Link> */}
       <li className='cursor-Pointer nav hover:text-[#F10B65]'>Whats new</li>
       <Link to='/'><li className='cursor-Pointer nav hover:text-[#F10B65]' onClick={() => setModalStatus(true)}>Login</li></Link> 
        <Link to='/'> 
            <button className='bg-[#F10B65] px-4 text-md rounded-sm text-white'>My profile</button>
        </Link>
     </Fragment>
    return (
    <>
      <div>
    
        <div className="bg-[#8dcee7] " >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-6 ">
        <div className="relative flex items-center lg:justify-evenly justify-between gap-36">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
        
        <img className='w-[60%] h-[50%] lg:w-[70%] lg:h-[65%] md:h-[60%] md:w-[55%]' src={logo} alt=''></img>
          </a>
          <ul className="text-black cursor-pointer text-lg items-center hidden space-x-8 lg:flex">
            {menuItems}
      
          </ul>
          
          <div className = "lg:hidden " >
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-slate-500" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full bg-[#207198]" >
                <div className="p-5  border rounded shadow-lg" >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                       
                       <img className='w-[60%] h-[50%] lg:w-[100%] lg:h-[100%] md:h-[80%] md:w-[65%]' src={logo} alt=''></img>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2   -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 text-white font-bold ">
                      {menuItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
    </div>
      <div>
      {modalStatus && (

        
        <div
          onClick={() => setModalStatus(false)}
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-40 transition-opacity"></div>
          <div data-aosName="zoom-in" className=" lg:ml-64  fixed inset-0 z-10 overflow-y-auto shadow-gray-300 shadow-lg">
            <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl lg:mr-[20%]">

                <div className="bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  pl-4 pt-5 sm:pl-6 sm:pb-10 mx-auto">
                  <div className='flex justify-center items-center'>
                    <img className=' w-[80%]' src={loginPhoto}></img>
                   
                  </div>
                  <div className='bg-white  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  py-8 lg:px-16 md:px-10 px-16' >
           
            <p>Email</p>
            <input type='email' className='bg-gray-50 mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
            <p>Password</p>
            <input type='email'  className='bg-gray-50 rounded shadow-inner placeholder:text-center h-10  focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
            <Link to='/'>
                 <button className='h-10 w-full loginButton mt-2 rounded text-white text-center'>Login</button>
            </Link>
            <h2 className='text-xs text-[#207198]'>Forgot Password?</h2>
            <div className='flex justify-between items-center'>
                <hr></hr>
                <h2>or</h2>
                <hr></hr>
            </div>

             <Link to='/'>  
             <div className='h-10 w-full px-2  flex justify-start pl-14 gap-4 items-center bg-[#E3F1FE]   mt-2 rounded  border-[1px] border-[#207198] cursor-pointer shadow-sm hover:shadow-lg' >
                <FcGoogle className='text-lg'></FcGoogle>
                <h2 className='text-sm text-[#207198]'>Continue With Google</h2>
                
            </div></Link>
            <Link to='/'>  
             <div className='h-10 w-full px-2 flex justify-start gap-4 pl-14 items-center bg-[#E3F1FE]   mt-2 rounded  border-[1px] border-[#207198] cursor-pointer shadow-sm hover:shadow-lg'>
                <BsFacebook className='text-lg text-[#207198]'></BsFacebook>
                <h2 className='text-sm text-[#207198]'>Continue With Facebook</h2>
            </div>
            </Link>
          
       
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

   
</>
    );
};

export default Navbar;