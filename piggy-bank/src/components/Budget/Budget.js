import React, { Component } from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import { Col, Grid, Row, Form, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";
import API from "../../api/API";




class FormBudget extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
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



    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={4}>
                    
                        <FormGroup>
                            <FormControl type="text" placeholder="Fijos" name="Fijos" value={this.state.Fijos}/>
                        </FormGroup>{' '}
                        <FormGroup>
                            <FormControl type="text" placeholder="Restaurante" name="Restaurante" value={this.state.Restaurante}/>
                        </FormGroup>{' '}
                        <FormGroup>
                            <FormControl type="text" placeholder="Social" name="Social" value={this.state.Social}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Mascota" name="Mascota" value={this.state.Mascota}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Regalos" name="Regalos" value={this.state.Regalos}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Apapacheo" name="Apapacheo" value={this.state.Apapacheo}/>
                        </FormGroup>
                        {/* <FormGroup>
                            <FormControl type="text" placeholder="Transporte" name="Transporte" value={this.state.Transporte}/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Ropa" name="Ropa" value={this.state.Ropa}/>
                        </FormGroup> */}
                        
                    </Col>

                </Row>
                <Button onClick={() => this.handleFormSubmit()} bsStyle="success">Create month´s Budget!</Button>
            </Grid>
        )
    }
}



export default FormBudget;