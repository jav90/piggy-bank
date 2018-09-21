import React from 'react';
import '../Footer/Footer.css';
import btnAdd from './assets/images/add-btn.svg'
import btnBudget from './assets/images/budget-btn.svg'
import btndiary from './assets/images/diary-btn.svg'
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";

const Footer = props => (
    <div>
      <Navbar fixedBottom>
        <Nav
          justified
          onSelect={key => this.handleSelect(key)}>
          <a href="#">
            <div className="col-xs-4 text-center">
            <img src={btnBudget} />
            </div>
          </a>
          <a href="/add">
            <div className="col-xs-4 text-center">
            <img src={btnAdd} />
            </div>
          </a>
          <a href="/diary">
            <div className="col-xs-4 text-center">
            <img src={btndiary} />
            </div>
          </a>
        </Nav>
      </Navbar>
    </div>
  );
  
  export default Footer;
  