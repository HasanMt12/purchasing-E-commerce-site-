import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePages/Home";
import MainLayout from "../Layouts/MainLayout"
import Registration from "../components/Shared/login/Registration";

import Dashboard from "../components/adminDashboard/Dashboard";
import PrivateRoute from "../Router/PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "../Router/AdminRoute/AdminRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
       {
        path: "/register",
        element: <Registration></Registration>
      },
       {
        path: "/dashboard",
        element: <PrivateRoute><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoute> 
      },
     
      
    ],
  },
 
  
]);

export default router;