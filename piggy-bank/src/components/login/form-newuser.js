import React, { Component } from "react";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";




class FormNewUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nombre: '',
      email:'',
      password:'',
      profesión:'',
      
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



  render() {
    return (
      <Grid>
        <Row>
        <Col xs={12} md={4}>
            <form>
            <Col xs={12} md={4}>
                        <Form horizontal>
                        <FormGroup controlId="formHorizontalName">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Nombre
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Nombre" value={this.state.nombre} onChange={this.onFormChanged} />
                                </Col>
                            </FormGroup>
                  
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>
                        </Form>;      
                    </Col>
            </form>
          </Col>
        </Row>
<Row>
    <col xs={12} md={4}>

    <Form inline>
                          <FormGroup controlId="formInlineProf">
                           <ControlLabel>Profesión</ControlLabel>{' '}
                           <FormControl type="text" placeholder="Economist" />
                      </FormGroup>{' '}
                           <FormGroup controlId="formInlinesalary">
                           <ControlLabel>Salario</ControlLabel>{' '}
                           <FormControl type="email" placeholder="How much do you make $?" />
                       </FormGroup>{' '}
    </Form>;
    </col>
</Row>
<Button bsStyle="success">Create Profile!</Button>
      </Grid>
    )
  }
}



export default FormNewUser;