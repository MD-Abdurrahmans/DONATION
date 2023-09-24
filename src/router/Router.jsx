

import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";

  
  const router = createBrowserRouter([


     {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[

            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('data.json')
            },
        ]
     }
  ])

  export default router
