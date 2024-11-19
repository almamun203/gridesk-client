import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./src/Layouts/Main";
import Home from "./src/Pages/Home/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);