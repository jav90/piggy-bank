import React from "react";
import { Link } from "react-router-dom";
import "./CustNavbar.css";
import settings from './asstes/images/settings-btn.svg'
import Navbar from "react-bootstrap/lib/Navbar";
import homeBtn from "./asstes/images/home-btn.svg";
import Nav from "react-bootstrap/lib/Nav";
import { Button } from "react-bootstrap";
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

const settingsBtn = props => (
  <div>
    <style type="text/css">
      {`
    .btn-custom {
        background-color: purple;
        color: white;
    }
    `}
    </style>
    <Button bsStyle="custom">Custom</Button>
  </div>
);



export default settingsBtn;