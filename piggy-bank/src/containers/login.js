import React, { Component } from "react";
import FormNewUser from "../components/login/form-newuser";
import LogIn from "../components/login/login";
import AddFormApi from "../api/AddFormApi";
import "./assets/generalStyle.css";
import PiguAdd from "./assets/images/add-user.svg";


class Add extends Component {
  state = {
    id: "",
    cantidad: "",
    formaPago: "",
    categoria: "",
    concepto: "",
    mensual: "",
    fecha: ""
  };


  // onSumbit = (fields)=> {
  //   this.setState({fields});
  // };

  render() {
    return (
      
      <Grid>
        <Row className="logIn">
        <Col xs={12} md={4}>
        
          HELLO
        <Image src={PiguAdd} />
    
        
        </Col>
        </Row>

        <Row className="add">
          
        <Col xs={12} md={4}>
        <Image src={PiguAdd} />
          <LogIn/>
          </Col>

        </Row>
      </Grid>

    )
  }
}

export default Add;