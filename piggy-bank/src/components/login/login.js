import React, { Component } from "react";
import { FormControl, FormGroup, Form} from "react-bootstrap";
import { Col, Grid, Row, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";
import API from "../../api/API";



class LogIn extends Component {
 state = {
        nombre:"",
        email: "",
        password:""
      };



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
                <Col xs={12} md={6}>
                
                </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Form horizontal>
                        <FormGroup controlId="formHorizontalName">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <FormControl
                                     type="Name"  
                                     name="nombre" 
                                     placeholder="Nombre" 
                                     value={this.state.nombre} onChange={this.onFormChanged}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={12} md={6} lg={4}>
                                    <FormControl 
                                        type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onFormChanged} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={12} md={6} lg={4}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onFormChanged} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10} style={{alignContent:"center"}}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button onClick={() => this.handleFormSubmit()}>Sign in</Button>
                                </Col>
                            </FormGroup>
                        </Form>;                
              
                    </Col>
                </Row>
            </Grid>
        )
    }
}



export default LogIn;








