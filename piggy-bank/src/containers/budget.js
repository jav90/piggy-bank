import React, { Component } from "react";
import FormBudget from "../components/Budget/Budget";
import "./assets/generalStyle.css";
import { Col, Grid, Row, Image } from "react-bootstrap";
import Btnbudget from "./assets/images/btnbudget-05.svg"

class Budget extends Component {
  state = {
    Fijos: '',
    Restaurante: '',
    Rappiuber: '',
    Social: '',
    Mascota: '',
    Home: '',
    Regalos: '',
    Apapacheo: '',
    Transporte: '',
    Ropa: '',
    Coffeeshop: '',
    Negocio: '',
    Super: '',
    Farmacia: '',
    Subscripciones: '',
    Mensualidad: '',
  };


  render() {
    return (
      
      <Grid>
        <Row>
          <Col xs={12}>
          <Image src={Btnbudget} style={{width:'150px', align:'center'}}/>
          <h2><strong>Plan your budget!</strong></h2>
          <p>Meditate on your last month´s expenses</p>
          </Col>

        </Row>

        <Row className="add">
        <Col xs={12} md={4}>
          <FormBudget/>
          </Col>

        </Row>
      </Grid>

    )
  }
}

export default Budget;