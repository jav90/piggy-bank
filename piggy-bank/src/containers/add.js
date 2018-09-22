import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import "./assets/generalStyle.css";
import { Col, Grid, Row, Image } from "react-bootstrap";
import lapiz from "./assets/images/lapiz-05.svg";

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
        <Row>
          <Col xs={12}>
          <Image src={lapiz} style={{width:'150px', align:'center'}}/>
          <h2><strong>Add a new expense!</strong></h2>
          </Col>

        </Row>

        <Row className="add">
        <Col xs={12} md={4}>
          <Form />
          </Col>

        </Row>
      </Grid>

    )
  }
}

export default Add;