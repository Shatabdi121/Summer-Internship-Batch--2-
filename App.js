import React from "react"
import ReactDOM from "react-dom/client" //Default Import
import Header from "./src/components/Header"  //Named Import
import ResCard from "./src/components/ResCard"
import Footer from "./src/components/Footer"
import Body from "./src/components/Body"
import Example from "./src/components/Example"

const Main = () =>{
    return(
        <div className="main">
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Main/>)
