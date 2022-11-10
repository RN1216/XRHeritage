import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SingleServicePreview from "../../Pages/SingleServicePreview/SingleServicePreview";
import Register from "../../Register/Register";

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
                path:'/blog',
                element:<Blog></Blog>
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
                element:<SingleServicePreview></SingleServicePreview>,
                loader:({params})=>fetch(`http://localhost:5000/servises/${params.id}`)
            }
            
        ]
    }
]);

export default router;