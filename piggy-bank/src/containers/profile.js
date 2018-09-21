import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row, Image, Jumbotron, Button  } from "react-bootstrap";
import pigupic from "./assets/pigu-pink-01.svg";




class Profile extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                   

                    <Jumbotron>
                        <h1>Hello, Pigu!</h1>
                        <Col xs={6} md={4}>
                        <Image src={pigupic} responsive />;
                    </Col>
                    <Col xs={6} md={4}>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Col>
                        <p>
                            <Button bsStyle="primary">Learn more</Button>
                        </p>
                    </Jumbotron>;
                </Row>

            </Grid>
        );

    }
}

export default Profile;