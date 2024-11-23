import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./src/Layouts/Main";
import Home from "./src/Pages/Home/Home/Home";
import Login from "./src/Pages/Login/Login";
import SignUp from "./src/Pages/SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
      ]
    },
  ]);