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
          <img src={ require('./assets/images/budget-btn.png') } />
          </NavItem>
          <NavItem eventKey={2}>
          <img src={ require('./assets/images/add-btn.png') } />
          </NavItem>
          <NavItem eventKey={3}>
          <img src={ require('./assets/images/diary-btn.png') } />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
  
  export default Footer;
  