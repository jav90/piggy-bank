import React, { Component } from "react";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row, Form, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";
import API from "../../api/API";



class FormNewUser extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            nombre: '',
            email: '',
            password: '',
            profesion: '',
            income: ''

        };
    }

    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    onFormChanged=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleFormSubmit()
    {
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
                   
                    <Form horizontal>
                         <FormGroup controlId="formHorizontalName">
                             <Col componentClass={ControlLabel} sm={2}>
                                Nombre
                             </Col>
                             <Col sm={10}>
                                <FormControl
                                 type="text"
                                 name="nombre"
                                 placeholder="Nombre"
                                 value={this.state.nombre}
                                 onChange={this.onFormChanged} />
                             </Col>
                        </FormGroup>

                         <FormGroup controlId="formHorizontalEmail">
                             <Col componentClass={ControlLabel} sm={2}>
                                Email
                             </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.onFormChanged} />
                             </Col>
                                </FormGroup>

                         <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={6}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                <FormControl
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.onFormChanged} />
                                        </Col>
                                </FormGroup>

                    </Form>

                         <FormGroup controlId="formInlineProf">
                            <ControlLabel>Profesión</ControlLabel>{' '}
                            <FormControl
                                type="text"
                                name="profesion"
                                placeholder="¿A que te dedicas?"
                                value={this.state.profesion}
                                onChange={this.onFormChanged} />
                        </FormGroup>{' '}
                         <FormGroup controlId="formInlinesalary">
                            <ControlLabel>Salario</ControlLabel>{' '}
                            <FormControl
                                type="text"
                                name='income'
                                placeholder="How much do you make $?"
                                value={this.state.income}
                                onChange={this.onFormChanged} />
                         </FormGroup>{' '}
                    </Col>
               
                </Row>
                <Button onClick={() => this.handleFormSubmit()} bsStyle="success">Create Profile!</Button>
            </Grid>
        )
    }
}



export default FormNewUser;