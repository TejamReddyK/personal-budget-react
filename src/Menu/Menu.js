import React from 'react';

import {
    Link
  } from "react-router-dom";
  

function Menu() {
  return (
    <nav
     role="navigation"
     aria-label="Main menu"
     itemScope
     itemType="https://schema.org/SiteNavigationElement">
    <div className='navtop'>
        <p className='menuItem'><Link itemProp="url" to="/">Home</Link></p>
        <p className='menuItem'><Link itemProp="/about" to="About">About</Link></p>
        <p className='menuItem'><Link itemProp="/login" to="Login">Login</Link></p>
    </div>
    </nav>   

  );
}

export default Menu;
