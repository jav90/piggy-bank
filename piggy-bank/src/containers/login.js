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
        <Row className="add-form">

          <Col xs={12} md={4}>

            <LogIn />
          </Col>
          <Row className="register">
          <Col md={6} mdPull={6}>
          <Image src={CreateNew} className="createNew" />
          </Col>
        </Row>

        </Row>
      </Grid>

    )
  }
}

export default Add;