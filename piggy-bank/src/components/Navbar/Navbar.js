import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import settings from './asstes/images/settings-btn.svg'
import './Navbar.css'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className= 'container'>
      <div className='row'>
        <div className='col-xs-12 text-right'>
        <img  src= {settings}/>
        </div>
      </div>
    </div>
   
  </nav>
);

export default Navbar;
