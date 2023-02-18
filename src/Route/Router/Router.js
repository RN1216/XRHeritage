import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AllReviews from "../../Pages/Reviews/AllReviews/AllReviews";
import MyReviews from "../../Pages/Reviews/MyReviews/MyReviews";
import SingleServicePreview from "../../Pages/SingleServicePreview/SingleServicePreview";
import Register from "../../Register/Register";
import PrivateRoutes from './../PrivateRoutes/PrivateRoutes';
import ErrorPage from './../../Sheard/ErrorPage/ErrorPage';
import About from "../../Pages/About/About";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/singleservicepreview/:id',
                element:<PrivateRoutes><SingleServicePreview></SingleServicePreview></PrivateRoutes>,
                loader:({params})=>fetch(`https://xr-heritage-server.vercel.app/servises/${params.id}`)
            },
            {
                path:'/allservices',
                element:<PrivateRoutes><AllService></AllService></PrivateRoutes>
            },
            {
                path:'/reviews',
                element:<PrivateRoutes><AllReviews></AllReviews></PrivateRoutes>
            },
            {
                path:'/myallreview',
                element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        
            
        ]
    }
]);

export default router;