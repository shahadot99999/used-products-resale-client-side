
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AppleProducts from "../../Pages/Home/ProductCards/AppleProducts";
import OnePlusProducts from "../../Pages/Home/ProductCards/OnePlusProducts";
import XiaomiProducts from "../../Pages/Home/ProductCards/XiaomiProducts";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Shared/Blog/Blog";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import image from '../../assets/images/404page.jpg'
import AllClients from "../../Pages/Dashboard/AllClients/AllClients";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../../Pages/Dashboard/ManageProducts/ManageProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
//import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";



const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/apple',
                element: <AppleProducts></AppleProducts>
            },
            {
                path: '/xoami',
                element: <XiaomiProducts></XiaomiProducts>
            },
            {
                path: '/oneplus',
                element: <OnePlusProducts></OnePlusProducts>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                 element: <div><img src={image} alt=""></img></div>
            }
            

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element:<AllClients></AllClients>
            },
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manageproducts',
                element:<ManageProducts></ManageProducts>,
               // loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)

            },
            {
                path: '/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ], 
     

    },

])

export default router;