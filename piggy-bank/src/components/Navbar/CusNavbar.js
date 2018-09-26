import React from "react";
import { Link } from "react-router-dom";
import "./CustNavbar.css";
import settings from './asstes/images/settings-btn.svg'
import Navbar from "react-bootstrap/lib/Navbar";
import homeBtn from "./asstes/images/home-btn.svg";
import Nav from "react-bootstrap/lib/Nav";
import { ButtonToolbar,Glyphicon, DropdownButton,MenuItem } from "react-bootstrap";






// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NavBar = props => (
  

  <Navbar fixedTop>
    <Nav
      justified
      onSelect={key => this.handleSelect(key)}>
      <div className='col-xs-6 text-left'>

      <ButtonToolbar>
        <DropdownButton
          bsSize="small"
          title="Settings"
          noCaret
          id="dropdown-no-caret"
        >
        

          <MenuItem>
            <Link to="/profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/tips">
              Pigu Tips!
            </Link>
          </MenuItem>
          <MenuItem divider />
          <MenuItem>
              <Link to="/login">
                LOG OUT
              </Link>
          </MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      </div>
      
      <Link to="/home">
        <div className='col-xs-6 text-right'>
          <img src={homeBtn} />
        </div>
      </Link>

    </Nav>
  </Navbar>
);

export default NavBar;
