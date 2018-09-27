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
         <form>
            <Row>
             <Col xs={12} md={4}>
                <FormGroup>
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
                </FormGroup>  
                </Col>
             </Row>
             <Row>
                 <Col xs={12} md={4}>
                 <FormGroup>
                    <ControlLabel>Concept</ControlLabel>
                    <FormControl
                        type="text" 
                        placeholder="Where did you spend this on?" 
                        name="Ropa" 
                        value={this.state.Concepto}
                        onChange={this.onFormChanged}/>
                    </FormGroup> 
                 </Col>
             </Row>
             <Row>
                 <Col xs={12} md={4}>
                 <FormGroup controlId="formControlsFormaPago">
                    <ControlLabel>Forma de pago</ControlLabel>
                    <FormControl 
                        componentClass="select"
                        placeholder="select"
                        value={this.state.formaPago}
                        onChange={this.onFormChanged}>
                        <option value="other">Credit</option>
                        <option value="other">Debit</option>
                        <option value="other">Cash</option>  
                    </FormControl>
                    </FormGroup>
                </Col>
             </Row>
             <Row>
                <Col xs={12} md={4}>
                <FormGroup controlId="formControlsCategoria">
                    <ControlLabel>Categoria</ControlLabel>
                        <FormControl 
                            componentClass="select" 
                            placeholder="Select a category"
                            value={this.state.categoria}
                            onChange={this.onFormChanged}>
                                <option value="Fijos">Fijos</option>
                                <option value="Restaurante">Restaurante</option>
                                <option value="coffeeshop">Coffee Shop</option>
                                <option value="Rappyuber">Rappy & uber</option>
                                <option value="Social">Social</option>
                                <option value="Mascota">Mascota</option>
                                <option value="Home">Home</option>
                                <option value="Regalos">Regalos</option>
                                <option value="Apapacheo">Apapacheo</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Ropa">Ropa</option>
                                <option value="Coffe Shop">Coffe Shop</option>
                                <option value="Subscripciones">Subscripciones</option>
                                <option value="Super">Super</option>
                        </FormControl>
                </FormGroup>            
                </Col>
             </Row>
            <Button bsStyle="success" onClick={() => this.handleFormSubmit()} style={{marginTop:'10%'}}>Add!</Button>

            </form>
         
        
      </Grid>
    )
  }
}



export default Form;