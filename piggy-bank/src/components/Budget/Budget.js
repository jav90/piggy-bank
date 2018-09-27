import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { Col, Grid, Row, Form, ControlLabel, Button } from "react-bootstrap";
import API from "../../api/API";
import './assets/budget.css';




class FormBudget extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            month:'',
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
    }


    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    onFormChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit() {
        API.postUsuario(this.state)
            .then(usuario => {
                console.log(usuario);
            })
            .catch(err => console.log(err))
        console.log(this.state);
    }

    showSummary =(event)=>{
        this.setState({
            
        });
    }



    render() {
        return (
            <Grid>
                    <div className="formwrapper">
                <Row>
                    <Col xs={6} md={6}>
                    <FormGroup controlId="formControlsMonth">
                    <h2>Select Month</h2>
                        <FormControl 
                            componentClass="select" 
                            placeholder="Select "
                            value={this.state.month}
                            onChange={this.onFormChanged}>
                                <option value="January">January</option>
                                <option value="Feburary">Feburary</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                        </FormControl>
                </FormGroup>            
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <FormGroup>
                            <FormControl type="text" placeholder="Fijos" name="Fijos" onChange={this.onFormChanged} value={this.state.Fijos}/>
                        </FormGroup>{' '}
                        <FormGroup>
                            <FormControl type="text" placeholder="Restaurante" name="Restaurante" onChange={this.onFormChanged} value={this.state.Restaurante}/>
                        </FormGroup>{' '}
                        <FormGroup>
                            <FormControl type="text" placeholder="Rappi/uber" name="Rappi/uber"  onChange={this.onFormChanged} value={this.state.Social}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Social" name="Social"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Mascota" name="Mascota"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Home Improvement" name="Home"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Regalos" name="Regalos" value={this.state.Regalos}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Apapacheo" name="Apapacheo" value={this.state.Apapacheo}/>
                        </FormGroup>
                         <FormGroup>
                            <FormControl type="text" placeholder="Transporte" name="Transporte" value={this.state.Transporte}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Ropa" name="Ropa" value={this.state.Ropa}/>
                        </FormGroup> 
                        <FormGroup>
                            <FormControl type="text" placeholder="Coffee shop" name="CoffeeShop"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Super market" name="super"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Pharmacy" name="Pharmacy"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="subscription" name="subscription"  onChange={this.onFormChanged} value={this.state.Mascota}/>
                        </FormGroup>
                        
                    </Col>

                </Row>
                <Button onClick={() => this.handleFormSubmit()} bsStyle="success">Create month´s Budget!</Button>
                    </div>
            </Grid>
        )
    }
}



export default FormBudget;