import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const NavBar =() =>{
let a=10

  return(
    <ul className="nav-bar">
        <li className="nav-items"><Link to="/">Home </Link></li>
        <li className="nav-items">Search</li>
        <li className="nav-items"><Link to="/offers">Offers</Link></li>
        <li className="nav-items"><Link to="/help">Help </Link></li>
        <li className="nav-items">Sign in</li>
         <li className="nav-items">Cart</li>
      </ul>
  )
}

const Header = () => {
  
  return (
    <div className="header">
      <img className="logo" src= {LOGO_URL}/>
      <div className="location">
      <input type="text" className="text" /></div>
      <NavBar/>
    </div>
  );
};

export default Header;
