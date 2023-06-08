

import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Routes'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react';
import Loader from './components/Shared/Loader';

function App() {
 const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);
  return (
    <>
    <div className=''>
      
      {loading ? (
       <div className = "App flex flex-col justify-center bg-[#EEF2F5]" >
    <Loader></Loader>
      
       </div>
      ) : (
        <>
      
            <RouterProvider router={router}></RouterProvider>
       </>
       
      // 
      )}<Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
      {/* <div>
       <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div> */}
   
    </>
  )
}

export default App
