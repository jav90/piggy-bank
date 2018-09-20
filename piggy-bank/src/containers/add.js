import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import AddFormApi from "../api/AddFormApi";
import "./assets/generalStyle.css";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row } from "react-bootstrap";


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