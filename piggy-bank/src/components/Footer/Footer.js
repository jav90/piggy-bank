import React from 'react';
import Navbar from "../../../node_modules/react-bootstrap/lib/Navbar"
import Nav from "../../../node_modules/react-bootstrap/lib/Nav"
import NavItem from "../../../node_modules/react-bootstrap/lib/NavItem"

const Footer = props => (
    <div>
      <Navbar fixedBottom>
        <Nav bsStyle="tabs"
          justified
          activeKey={1}
          onSelect={key => this.handleSelect(key)}>
          <NavItem eventKey={1}>
            NavItem 1
          </NavItem>
          <NavItem eventKey={2}>
            NavItem 2
          </NavItem>
          <NavItem eventKey={3}>
            NavItem 3
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
  
  export default Footer;
  