import React, { Component } from "react";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";
import API from "../../api/API";



class Form extends Component {
  constructor(props, context) {
    super(props, context);


    this.state = {
      id: "",
      cantidad: "",
      formaPago: "",
      categoria: "",
      concepto: "",
      mensual: "",
      fecha: ""
    };
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return null;
  // }

  onFormChanged=(event)=>{
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleFormSubmit()
{
    API.postGasto(this.state)
    .then(gasto => {
        console.log(gasto);
    })
    .catch(err => console.log(err))
    console.log(this.state);
}



  render() {
    return (
      <Grid>
        <Row>
        <Col xs={12} md={4}>
            <form>
          <FormGroup>
            <Col xs={12} md={4}>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl
                 type="text" 
                 name="cantidad"
                 placeholder="cantidad"
                 value={this.state.nombre}
                 onChange={this.onFormChanged}/>

                <InputGroup.Addon>.00</InputGroup.Addon>
              </InputGroup>
            </Col>
          </FormGroup>
          
              <FormGroup controlId="formHorizontalMonto">
                <Col componentClass={ControlLabel} sm={2}>
                  Concepto
    </Col>
                <Col sm={12}>
                  <FormControl type="email" placeholder="¿En donde" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formControlsFormaPago">
              <Col xs={12} md={4}>
                <ControlLabel>Forma de pago</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">Credit</option>
                  <option value="other">Debit</option>
                  <option value="other">Cash</option>
                </FormControl>
              </Col>
              </FormGroup>

              <FormGroup controlId="formControlsCategoria">
              <Col xs={12} md={4}>
                <ControlLabel>Categoria</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">Restaurante</option>
                  <option value="other">Coffee Shop</option>
                  <option value="other">Fijos</option>
                </FormControl>
                </Col>
              </FormGroup>

            
            <Button bsStyle="success" onClick={() => this.handleFormSubmit()} style={{marginTop:'10%'}}>Add!</Button>

            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}



export default Form;