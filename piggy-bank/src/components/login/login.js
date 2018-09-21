import React, { Component } from "react";
import { FormControl, FormGroup, Form} from "react-bootstrap";
import { Col, Grid, Row, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";



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
        
        console.log(this.state)
    }

    render() {
        return (
            <Grid>
                <Row>
                <Col xs={12} md={4}>
                
                </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <Form horizontal>
                        <FormGroup controlId="formHorizontalName">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="Name"  name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={this.onFormChanged}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.onFormChanged} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.onFormChanged} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button link  onClick={() => this.handleFormSubmit()}>Sign in</Button>
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








