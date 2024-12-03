import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./src/Layouts/Main";
import Home from "./src/Pages/Home/Home/Home";
import Login from "./src/Pages/Login/Login";
import SignUp from "./src/Pages/SignUp/SignUp";
import PrivateRoute from "./src/PrivateRoute/PrivateRoute";
import Dashboard from "./src/Layouts/Dashboard";
import Contact from "./src/Pages/Contact/Contact";
import AllEmployees from "./src/Pages/Dashboard/AllEmployees/AllEmployees";


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
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // admin routes
        {
          path:'allEmployees',
          element:<AllEmployees></AllEmployees>
        },
        {}
      ]
    }
  ]);