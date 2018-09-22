import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import "./assets/generalStyle.css";
import { Col, Grid, Row, Image} from "react-bootstrap";
import RegisterForm from "../components/login/form-newuser";
import PiguRegister from "./assets/images/piguRegister-01.svg";


class NewUser extends Component {
  state = {
    nombre: '',
    email:'',
    password:'',
    profesion:'',
    income:''
  };



  render() {
    return (
      
      <Grid>
     
        <Row componentClass="register">
            <Col xs={12} md={4}> 
            <Image src={PiguRegister} style={{display: 'absolute', justifyContent: 'center', width:'200px', marginTop:'10px'}}/>
            </Col>
        <Col xs={12} md={4} >
          <RegisterForm/>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default NewUser;