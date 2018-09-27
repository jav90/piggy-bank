import React from 'react';
import '../Footer/Footer.css';
import btnAdd from './assets/images/add-btn.svg';
import btnBudget from './assets/images/budget-btn.svg';
import btndiary from './assets/images/diary-btn.svg';
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import {Link} from "react-router-dom";

const Footer = props => (
    <div>
      <Navbar fixedBottom>
        <Nav
          justified
          onSelect={key => this.handleSelect(key)}>
          <Link to="/budget">
            <div className="col-xs-4 text-center">
            <img src={btnBudget} />
            </div>
          </Link>
          <Link to="/add">
            <div className="col-xs-4 text-center">
            <img src={btnAdd} />
            </div>
          </Link>
          <Link to="/diary">
            <div className="col-xs-4 text-center">
            <img src={btndiary} />
            </div>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
  
  export default Footer;
  