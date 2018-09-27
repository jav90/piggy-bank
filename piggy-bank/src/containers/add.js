import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import "./assets/generalStyle.css";
import { Col, Grid, Row, Image } from "react-bootstrap";
import lapiz from "./assets/images/lapiz-verde-09.svg";

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
        <div className="wrapWrap">
          <Row className="icon">
          <div>
            <Col>
            <Image src={lapiz} style={{width:'110px'}}/> 
          </Col> 
            </div>
            </Row>
        <Row>
          <Col xs={12} md={4}>
          <div className="title-add">
            Add a new expense!
          </div>
          
          </Col>
        </Row>
        <Row className="add">
        <Col xs={12} md={4}>
          <Form/>
          </Col>

        </Row>
        </div>
      </Grid>

    )
  }
}

export default Add;