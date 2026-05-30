import React from "react"
import ReactDOM from "react-dom/client" //Default Import
import Header from "./src/components/Header"  //Named Import
import ResCard from "./src/components/ResCard"
import Footer from "./src/components/Footer"
import Body from "./src/components/Body"
import Example from "./src/components/Example"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Offers from "./src/components/Offers"
import ErrorPage from "./src/components/ErrorPage"
import ResMenu from "./src/components/ResMenu"


const Main = () =>{
    return(
        <div className="main">
        <Header/>
        <Outlet />
        <Footer/>
        </div>
    )
}



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:"/offers",
                element:<Offers/>
            },
            {
                path:"/resMenu/:resId",
                element:<ResMenu/>
            }
        ]
    },
])




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
