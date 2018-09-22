import React, { Component } from "react";
import Form from "../components/add-expense/Form";
import { FormControl, FormGroup, HelpBlock, FieldGroup } from "react-bootstrap";
import { Col, Grid, Row, Image, Jumbotron, Button } from "react-bootstrap";
import pigupic from "./assets/pigu-pink-01.svg";
import foto from "./assets/foto.png";
import "./assets/generalStyle.css";





class Profile extends React.Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">

                    <Col xs={12} md={6}>
                        <Jumbotron className="profile">
                            <h2><strong>Hello, José</strong></h2>
                            <Image width="250px" src={foto} />
                            <p> Bass Player </p>
                            <p> Monthly Income : $10,000 </p>
                            <p> I Love to Travel </p>
                            <Button bsStyle="info">Edit Profile</Button>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>

        );

    }
}

export default Profile;