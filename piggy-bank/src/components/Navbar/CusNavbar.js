import React from "react";
import { Link } from "react-router-dom";
import "./CustNavbar.css";
import settings from './asstes/images/settings-btn.svg'
import Navbar from "react-bootstrap/lib/Navbar";
import homeBtn from "./asstes/images/home-btn.svg";
import Nav from "react-bootstrap/lib/Nav";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavBar = props => (
 
  <Navbar fixedTop>
        <Nav
          justified
          onSelect={key => this.handleSelect(key)}>
          <a href="/home">
            <div className='col-xs-6 text-left'>
            <img src={settings} />
            </div>
          </a>
          <a href="/settings">
            <div className='col-xs-6 text-left'>
            <img src={homeBtn}/>
            </div>
          </a>
       
        </Nav>
      </Navbar>
);

export default NavBar;
