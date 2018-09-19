import React, { Component } from "react";
import {FormControl, FormGroup, HelpBlock, FieldGroup} from "react-bootstrap";
import{Col, ControlLabel, Checkbox, Button} from "react-bootstrap";


class Form extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  
  render(){
    return(
      <form>
      <FormGroup
      id="formControlsCantidad"
      type="text"
      label="Text"
      placeholder="Agrega $ "
    />

    <FormGroup controlId="formControlsFormaPago">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Credit</option>
        <option value="other">Debit</option>
        <option value="other">Cash</option>
      </FormControl>
    </FormGroup>

     <FormGroup controlId="formControlsCategoria">
      <ControlLabel>Seleciona tu Categoria</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Restaurante</option>
        <option value="other">Coffee Shop</option>
        <option value="other">Fijos</option>
      </FormControl>
    </FormGroup>

      <FormGroup
      id="formControlsConcepto"
      type="text"
      label="Text"
      placeholder="Concepto "
    />

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}
  
  
  
export default Form;