import React, { Component } from "react";
import FormNewUser from "../components/login/form-newuser";
import LogIn from "../components/login/login";
import AddFormApi from "../api/API";
import "./assets/generalStyle.css";
import PiguAdd from "./assets/images/piguBlue.svg";
import CreateNew from "./assets/images/createNew.svg";
import { Col, Grid, Row, Image } from "react-bootstrap";


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




  render() {
    return (

      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <Image src={PiguAdd} className="piguLog" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <h1>Bienvenido, Soy Pigu!</h1>
          </Col>
        </Row>
        <Row >
          <Col xs={12} md={4}>

            <LogIn />
          </Col>
          <Row className= "createNew"  >
          <a href="/newuser">
          <Col md={6} mdPull={6} style={{marginLeft:'50%'}}>
          <Image src={CreateNew}  />
          </Col>
          </a>
        </Row>
        </Row>
      </Grid>

    )
  }
}

export default Add;