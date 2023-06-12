import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePages/Home";
import MainLayout from "../Layouts/MainLayout"
import Registration from "../components/Shared/login/Registration";

import Dashboard from "../components/adminDashboard/Dashboard";
import PrivateRoute from "../Router/PrivateRoute/PrivateRoute.jsx";
import AdminRoute from "../Router/AdminRoute/AdminRoute";
import Wishlist from "../Pages/Wishlist/Wishlist";
import AddTocart from "../Pages/Wishlist/AddTocart";
import AllProducts from "../Pages/HomePages/products/AllProducts/AllProducts";
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
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute> 
      },
      {
        path: "/cart",
        element: <PrivateRoute><AddTocart></AddTocart></PrivateRoute> 
      },
       {
        path: "/products",
        element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute> 
      },
     
      
    ],
  },
 
  
]);

export default router;