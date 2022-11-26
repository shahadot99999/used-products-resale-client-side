import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AppleProducts from "../../Pages/Home/ProductCards/AppleProducts";
import OnePlusProducts from "../../Pages/Home/ProductCards/OnePlusProducts";
import XiaomiProducts from "../../Pages/Home/ProductCards/XiaomiProducts";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
            

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            }
        ]
    }
])

export default router;