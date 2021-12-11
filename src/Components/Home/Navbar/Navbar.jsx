import React, { useState, useEffect } from 'react';
import Logo from "../../../assets/shared/desktop/logo.svg";
import Menubars from "../../../assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../../assets/shared/mobile/icon-close.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    
    const [mobileMenu, setMobileMenu] = useState(false);
    
    
    
    return (
        <div className="nav">
        <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
        
        
        <div className="menu">
            
            <Link onClick={() => {
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
                
            }} className="nav-link" to="/">Home</Link>
            <Link onClick={() => {
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
                
            }} className="nav-link" to="/about">About Us</Link>
  <Link onClick={() => {
                
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
            }} className="nav-link" to="/plan">Create Your Plan</Link>
  </div>
  {!mobileMenu && 
  
    <img onClick={() => {
        document.getElementsByClassName("menu")[0].classList.add("mobile-menu");
        document.getElementsByClassName("close-icon")[0].style.display = "block";
        setMobileMenu(true);
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  }} className="menubars" src={Menubars} alt="menubars" />
  }
  


    <img onClick={() => {
        document.getElementsByClassName("menu")[0].classList.remove("mobile-menu");
        setMobileMenu(false);
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        document.getElementsByClassName("close-icon")[0].style.display="none";
    }} className="close-icon" src={CloseIcon} alt="close"/>

  
        </div>
    )
}

export default Navbar
