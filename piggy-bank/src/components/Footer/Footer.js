import React from 'react';
import '../Footer/Footer.css';
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar";
import Nav from "../../../node_modules/react-bootstrap/lib/Nav";

const Footer = props => (
    <div>
      <Navbar fixedBottom>
        <Nav
          justified
          onSelect={key => this.handleSelect(key)}>
          <a href="#">
            <div className="col-xs-4 text-center">
              1
            </div>
          </a>
          <a href="#">
            <div className="col-xs-4 text-center">
              2
            </div>
          </a>
          <a href="#">
            <div className="col-xs-4 text-center">
              3
            </div>
          </a>
        </Nav>
      </Navbar>
    </div>
  );
  
  export default Footer;
  