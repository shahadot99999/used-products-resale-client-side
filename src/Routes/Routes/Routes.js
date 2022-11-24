import AppleProducts from "../../Pages/Home/ProductCards/AppleProducts";
import OnePlusProducts from "../../Pages/Home/ProductCards/OnePlusProducts";
import XiaomiProducts from "../../Pages/Home/ProductCards/XiaomiProducts";
import Login from "../../Pages/Login/Login";

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
    }
])

export default router;