import React from 'react';
import './Navbar.css';
import logo from './logo.png'
const Navbar = () => {
    return (
        
           <nav className="navbar  sticky-top navbar-expand-sm navbar-light bg-light">
               <a href="#" className="navbar-brand name">
               <img src={logo} className="logo" alt="logo"/>
               Messanger
               </a>
           </nav>

        
    );
};



export default Navbar;