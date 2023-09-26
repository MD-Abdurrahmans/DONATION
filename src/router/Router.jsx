
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/root/Root";
import HomePage from "../pages/homePage/HomePage";
import CardDetails from "../pages/cardDetails/CardDetails";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";
  


   const router = createBrowserRouter([


     {
         path:'/',
         element:<Root></Root>,
         children:[

            {
                path:'/',
                element:<HomePage></HomePage>,
                loader:()=>fetch('data.json'),
            },
            {
                path:'/cardDetails/:id',
                element:<CardDetails></CardDetails>,
                loader:()=>fetch('data.json'),
            },
            {
                path:'/donation',
                element:<Donation></Donation>,
                // loader:()=>fetch('data.json'),
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=>fetch('data.json'),
            },
         ]
     },
     
   ])

   export default router
