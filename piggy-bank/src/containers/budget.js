import React, { Component } from "react";
import FormBudget from "../components/Budget/Budget";
import "./assets/generalStyle.css";
import { Col, Grid, Row, Image } from "react-bootstrap";
import Btnbudget from "./assets/images/rayo-budget-10.svg"

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
        <div className="wrapWrap">
        <Row>
          <Col xs={6} md={6}>
          <Image src={Btnbudget} style={{width:'110px' ,float:'right', marginRight:'15px'}}/>
          </Col>
          <Col xs={6} md={6}>
          <div className="budget-text">
          <h2>"This is a good time to meditate on your last month´s expenses, and carefully craft this month´s Budget plan!"  </h2>
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
          
        <h1>Plan your budget!</h1>
          </Col>
        </Row>
        <Row className="add">
        <Col xs={12} md={12}>
          <FormBudget/>
          </Col>

        </Row>
        </div>
      </Grid>

    )
  }
}

export default Budget;