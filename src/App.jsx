

import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <div>
       <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
   
    </>
  )
}

export default App
