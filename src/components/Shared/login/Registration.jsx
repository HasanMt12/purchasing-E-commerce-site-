import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Authentication/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import loginPhoto from '../../../assets/logo99.png'
import useToken from '../../../hooks/useToken.js';
const Registration = () => {
      const {register, handleSubmit , formState: {errors} } = useForm();
     const { signUp ,updateUser, signInWithGoogle}= useContext(AuthContext);
     const [registerError, setRegisterError] = useState('')
     const [createdUserEmail, setCreatedUserEmail] = useState('')
     const navigate = useNavigate()
       const [token] = useToken(createdUserEmail);
     if(token){
            navigate('/')
        }
     const handleSignUp = data =>{
   setRegisterError('')

    console.log(data);

    signUp(data.email, data.password)

    .then(result =>{
        const  user = result.user;
        console.log(user);
        toast.success('user register successfully')
            navigate('/')
          const userInfo = {
                displayName: data.name
            }

        updateUser(userInfo)
            .then( () => {
               saveUser(data.name, data.email )
            } )
            .catch(error => console.log(error));
    })
    .catch(error=> {
        console.log(error)
       setRegisterError(error.message)
    });
    
 }
       const saveUser = (name , email ) =>{
            const user = {name , email };
            fetch('https://99-pro-server.vercel.app/users', {
                method: 'POST' ,
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data =>{
                console.log('test',data);
                setCreatedUserEmail(email)  
            })
        }
        const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
    
    //   navigate(from, { replace: true })
    })
  }
    return (
        <>
        {/* 
         <form onSubmit={handleSubmit(handleSignUp)} >
                
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-gray-100">Name</span></label>
                        <input type="text" {...register("name" ,
                       { required: "name is required"}
                        )}
                       
                           className="input input-bordered w-full max-w-xs text-gray-600"/>
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-gray-100">Email</span></label>
                        <input type="email" {...register("email" , {
                            required: "write a valid email"
                        })} 
                       
                           className="input input-bordered w-full max-w-xs text-gray-600"/>
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                            <label className="label"><span className="label-text text-gray-100">Select role</span></label>
                <select {...register("role", {
                        required: "select role"
                    })}className="select select-bordered text-gray-900 w-full max-w-xs">
                    <option  value="buyer" className='text-gray-900'>Buyer</option>
                    <option value="seller"  className='text-gray-900'>Seller</option>
                </select>

                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label"><span className="label-text text-gray-100">Password</span></label>
                        <input type="password" {...register("password" , {
                            required: "password is required",
                             minLength: {value: 6 , message: "password must be 6 character "},
                                 pattern: { value: /(?=.*[!@#$&*])(?=.*[0-9])/, message: ' Password must have one special characters' }
                        })}
                       
                          className="input input-bordered w-full max-w-xs text-gray-600"/>
                      {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                      
                    </div>
               
                    <input className='btn btn-accent w-full' value="Sign up" type="submit" />
                    {registerError && <p className='text-red-500'>{registerError}</p>}
                </form> */}
      
                   <div className='h-screen flex justify-center items-center'> 
                <div className="md:w-[80%]  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  mx-auto">
                  <div className='flex justify-center items-center'>
                  
                   
                  </div>
                  <div className='  py-8 my-4 lg:px-16 md:px-10 px-16' >
           <h2>Registration</h2>
           <form onSubmit = {
               handleSubmit(handleSignUp)
           } >
            <div>
            <p>Name</p>
            <input 
            type="text" {...register("name" ,
                       { required: "name is required"}
                        )}
            className=' mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
                 {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
            </div>
           <div>
            <p>Email</p>
            <input 
                    type="email" {...register("email" , {
                            required: "write a valid email"
                        })} 
            className=' mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
                 {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
            </div>
            <div>
            <p>Password</p>
            <input 
                    type="password" {...register("password" , {
                            required: "password is required",
                             minLength: {value: 6 , message: "password must be 6 character "},
                                 pattern: { value: /(?=.*[!@#$&*])(?=.*[0-9])/, message: ' Password must have one special characters' }
                        })}
            className=' mb-2 rounded shadow-inner placeholder:text-center h-10   focus:outline-blue-800 border-[1px] border-gray-800 w-full '/>
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
            </div>
            <input className='h-10 cursor-pointer w-full loginButton mt-2 rounded bg-pink-400' value="Sign up" type="submit" />
                    {registerError && <p className='text-red-500'>{registerError}</p>}
            </form>
            <h2 className='text-xs text-[#207198]'>Forgot Password?</h2>
            <div className='flex justify-between items-center'>
                <hr></hr>
                <h2>or</h2>
                <hr></hr>
            </div>

             
             <div onClick = {
                 handleGoogleSignin
             }
             className = 'h-10 w-full px-2  flex justify-start pl-14 gap-4 items-center bg-[#E3F1FE]   mt-2 rounded  border-[1px] border-[#207198] cursor-pointer shadow-sm hover:shadow-lg' >
                <FcGoogle className='text-lg'></FcGoogle>
                <h2 className='text-sm text-[#207198]'>Continue With Google</h2>
                
            </div>
         
           
          
       
        </div>
                </div>
           </div> 
           
  
        </>
    );
};

export default Registration;