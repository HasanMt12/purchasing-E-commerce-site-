import Lottie from 'lottie-react'
import loginPhoto from '../../assets/loginPhoto.png'
import spinner from '../../assets/Spinner.json'
const Loader = () => {
    return (
        <>
            <div className='flex justify-center bg-transparent opacity-40 my-64  items-center'>
                    <img className='relative z-2 w-[12%]' src={loginPhoto}></img>
                    <Lottie className=" w-[25%] flex absolute  justify-center items-center" animationData={spinner} loop={true} 
                    ></Lottie>
                  </div>
        </>
    );
};

export default Loader;