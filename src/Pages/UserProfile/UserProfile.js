import React from 'react';
import userPhoto from '../../assets/userPhoto.png'
import brand1 from '../../assets/hotels.png'
import brand2 from '../../assets/Nike.png'
import brandLogo from '../../assets/hotels.png'
const UserProfile = () => {
    const items = [...Array(8)];

    return (
        <div className='my-8'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-36 md:px-20 px-14'>

        <div className=''>
            <h2 className='text-black font-bold text-2xl my-4'>Account Summary </h2>
            <div className='flex justify-start items-center gap-4'>
                <img src={userPhoto} alt=''></img>
                <div className='mt-32'>
                    <h2 className='text-xl'>Member Since:</h2>
                    <h2 className='text-xl'>Member Since:</h2>
                </div>
            </div>
            <div className='my-20 shadow-[5px_4px_20px_7px_rgba(51,79,93,0.23)] px-16 py-8 rounded-xl'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-xl'>Pending</h2>
                    <h2 className='text-xl '>$10.00</h2>
                </div>
                <div className='flex justify-between items-center my-2'>
                <h2 className='text-xl'>Verified</h2>
                    <h2 className='text-xl text-start'>$0.00</h2>
                </div>
                <div className='flex justify-between items-center my-2'>
                <h2 className='text-xl'>Payable</h2>
                    <h2 className='text-xl'>$0.00</h2>
                </div>
                <div className='flex justify-between items-center '>
                <h2 className='text-xl'>Total</h2>
                    <h2 className='text-xl'>$10.00</h2>
                </div>
                
        
            </div>
        </div>

        <div className='pl-36'>
            <h2 className='text-black font-bold text-2xl my-4'>Favorites</h2>
            <div className=' h-5/6 w-11/12 bg-white shadow-[5px_4px_20px_7px_rgba(51,79,93,0.23)] rounded-xl overflow-y-scroll'>
                <img className='w-6/12 mx-auto mt-6' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
                <img className='w-6/12 mx-auto my-4' src={brand2} alt=''></img>
                <img className='w-6/12 mx-auto ' src={brand1} alt=''></img>
            </div>
        </div>
          </div>

          <div className='px-36'>
          <h2 className='text-black font-bold text-2xl my-4 '>Recommended stores</h2>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-6 mb-36'>
               {items.map((item, index) => (
           <div className='drop-shadow-[3px_6px_28px_rgba(51,79,93,0.23)] rounded-xl bg-white'>
               <div className='lg:p-6 md:p-3 p-1'>
                 <img className='w-[70%] mx-auto ' src={brandLogo} alt=''></img>
               </div> 
            <h2 className='text-center text-lg mb-4 text-black'>14% Cashback</h2>

           </div>
             
          ))}
          </div>
          </div>
        </div>
    );
};

export default UserProfile;