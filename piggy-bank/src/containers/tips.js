import React, { Component } from "react";
import { Col, Grid, Row, Image, Jumbotron, Button, Alert } from "react-bootstrap";
import pigutips from "./assets/images/piguTips-01.svg";
import "./assets/generalStyle.css";





class Tips extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">

                    <Col xs={12} md={6}>

                        <h2><strong>Pigu Tips!</strong></h2>
                        <p>Come on! ask me for some random tips :) </p>
                        <Image width="300px" src={pigutips} />

                        <Alert bsStyle="warning">
                            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                            good.
                        </Alert>;
                    </Col>
                </Row>
            </Grid>

        );

    }
}

export default Tips;