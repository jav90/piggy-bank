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
          <h2>Plan your budget!</h2>
          <p>This is a good time to meditate on your last month´s expenses, and carefully craft this month´s Budget plan! </p>
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