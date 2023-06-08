import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePages/Home";
import MainLayout from "../Layouts/MainLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
      
    ],
  },
  
]);

export default router;