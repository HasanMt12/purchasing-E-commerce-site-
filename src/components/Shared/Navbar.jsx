import { Fragment, useContext, useEffect, useState } from 'react';
import logo from '../../assets/y.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import loginPhoto from '../../assets/login.png'
import "./navbar.css"
import { AuthContext } from '../../Authentication/AuthProvider';
import { useForm } from "react-hook-form";
import useAdmin from '../../hooks/useAdminSecurity';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import logo99 from '../../assets/logo99.png'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [modalStatus, setModalStatus] = useState(false);
   const {user , logOut} = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email)

   const { register, formState: { errors }, handleSubmit } = useForm();
        const { signIn ,signInWithGoogle }= useContext(AuthContext)
        const [signInError, setSignInError] = useState('');
        const [signInUserEmail, setSignInUserEmail] = useState('');
      const form = location.state?.form?.pathname || '/';
       
      const handleLogOut = () => {
        logOut()
        .then( ()=> {} )
        .catch(error => console.log(error));
    }
   const navigate = useNavigate();

   const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://99-pro-server.vercel.app/wishlist?email=${user?.email}&&limit=3`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email]);

  const menuItems = <Fragment>
    

       <Link to='/'><li className='cursor-Pointer nav hover:text-[#F10B65]'>Home</li></Link> 
       {
        isAdmin &&  <Link to='/dashboard'><li className='cursor-Pointer nav hover:text-[#F10B65]'>Dashboard</li></Link>
       }
      <span className="relative inline-block ml-8">
        <Link to='/cart'> <AiOutlineShoppingCart  className='cursor-Pointer   text-white font-bold text-4xl  ' ></AiOutlineShoppingCart></Link> 
        <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1/2 animate-bounce font-bold text-blue-800 -translate-y-1/2  rounded-full">{data.length}</span>
      </span>

       <span className="relative inline-block ml-8">
        <Link to='/wishlist'> <AiFillHeart  className='cursor-Pointer   text-red-600 text-4xl rounded-lg  shadow-lg' ></AiFillHeart></Link> 
        <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1/2 animate-bounce font-bold text-white -translate-y-1/2  rounded-full">{data.length}</span>
      </span>
 
       {user?.uid 
       ? <>
       
            <button style={{boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"}}
            className='flex text-[#EEF2F5] justify-center transition duration-200 ease-in-out transform px-5 py-1 w-30 border-b-4 border-[#df81a5] hover:border-b-2 bg-gradient-to-t from-[#cc5a86]  via-[#EA0F62] to-[#e2a1ba] rounded-2xl hover:translate-y-px '><Link onClick={handleLogOut}>log out</Link></button>
       </> 
       
       : 
        <Link to='/'> 
            <button
            style={{boxShadow:"0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"}}
            className='flex text-[#EEF2F5] justify-center transition duration-200 ease-in-out transform px-5 py-1 w-30 border-b-4 border-[#df81a5] hover:border-b-2 bg-gradient-to-t from-[#cc5a86]  via-[#EA0F62] to-[#e2a1ba] rounded-2xl hover:translate-y-px '
            onClick={() => setModalStatus(true)}
            >Login</button>
        </Link>
       
        }
        
     </Fragment>


  const handleLogin = data =>{
            console.log(data);
            setSignInError('');
             signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                setSignInUserEmail(data.email)
                setModalStatus(false)
            })
            .catch(error=> {
                console.log(error.message)
                setSignInError(error.message);
            });
        
        }

        const handleGoogleSignin = () => {
            signInWithGoogle().then(result => {
                console.log(result.user)
                //     setSignInUserEmail(data.email);
                 navigate(form, { replace: true });
           navigate("/")
              })
        }
    return (
    <>
      <div>
    
        <div className="bg-[#ee7da8]  " >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="relative flex items-center  justify-between ">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
        
       <div className="flex items-center justify-center w-16 h-16 mx-2 overflow-hidden rounded-full">
    <img src={logo}/>
  </div>
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
              <svg className = "w-5 text-[#EA0F62]" viewBox="0 0 24 24" >
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
              <div className="absolute z-10 top-0 left-0 w-full bg-[#82c1da]" >
                <div className="p-5  border rounded shadow-lg" >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                       
                       <img className='w-[30%] h-[30%] lg:w-[100%] lg:h-[100%] md:h-[80%] md:w-[65%]' src={logo99} alt=''></img>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 bg-[#EA0F62]  -mr-2 transition duration-200 rounded hover:bg-[#c7497a] focus:bg-[#EA0F62] focus:outline-none focus:shadow-outline"
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
                    <ul className="space-y-4 text-start font-bold ">
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
          className="relative z-10"
          // aria-labelledby="modal-title"
          // role="dialog"
          // aria-modal="true"
        >
          <div data-aosName="zoom-in" className=" lg:ml-60 fixed inset-0 z-10 overflow-y-auto ">
           
            <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl lg:mr-[20%]">
                      <button
                        className="p-2 absolute z-2 bg-[#EA0F62]  right-1 transition duration-200 rounded hover:bg-[#c7497a] focus:bg-[#EA0F62] focus:outline-none focus:shadow-outline"
                       onClick={() => setModalStatus(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                <div className="bg-white grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  pl-4 pt-5 sm:pl-6 sm:pb-10 mx-auto">
                  <div className='flex justify-center items-center'>
                    <img className=' w-[80%]' src={loginPhoto}></img>
                   
                  </div>
                  <div className='bg-white z-1 relative  shadow-md  py-8 my-4 lg:px-16 md:px-10 px-16' >
           
           <form onSubmit = { handleSubmit(handleLogin)} >
          
           <div>
            <p>Email</p>
            <input type="email" 
                        {...register("email" , {required: "Email Address is required"})}
            className=' mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div>
            <p>Password</p>
            <input 
                     {...register("password" , {
                            required:"password required",
                            minLength: {value: 6 , message:'password must be 6 character or longer'}
                            })}
            className=' mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
         
            <input className='h-10 cursor-pointer w-full loginButton mt-2 text-white font-semibold rounded bg-pink-400' value="Login" type="submit" >
 
            </input>
                      {signInError && <p className='text-gray-100'>{signInError}</p>}
           

            </form>
            <h2 className='text-xs text-[#207198]'>You Dont have an account ? <Link to='register'><span onClick={() => setModalStatus(false)} className='text-pink-500'>Register</span></Link></h2>
            <div className='flex justify-between items-center'>
                <hr></hr>
                <h2>or</h2>
                <hr></hr>
            </div>

           <div onClick = {
             () => setModalStatus(false)
           } >
             <div
             onClick={handleGoogleSignin}
             
             className='h-10 cursor-pointer w-full px-2  flex justify-start pl-14 gap-4 items-center bg-[#E3F1FE]   mt-2 rounded  border-[1px] border-[#207198] cursor-pointer shadow-sm hover:shadow-lg' >
                <FcGoogle className='text-lg'></FcGoogle>
                <h2 className='text-sm text-[#207198]'>Continue With Google</h2>
                
            </div></div>
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