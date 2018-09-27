import React, { Component } from "react";
import { Col, Grid, Row, ControlLabel, InputGroup,Image, Button, Jumbotron } from "react-bootstrap";
import Tip from "./assets/tip-credit-07.svg"
import card from "./assets/card-08.svg";
import "./assets/tipcard.css";





class TipCard extends Component{

    render(){
        return(

        <Grid>
        <div className="card-content">

            <Row>
                <Col xs={12} md={12}>
                <div className="title">Tip of the day!</div>
                <div className="tipTitle"><h2><strong>Life cycle of your credit card</strong></h2></div>
                </Col>
            </Row>
            <Row>
                    ¿<div className="tipImg">
                        <Col xs={12} md={12}>
                        <Image src={Tip} style={{width:"290px", padding:"5px"}}/>

                        </Col>
                    </div>
                    
                </Row>
        </div>
        </Grid>
        )
    }

}

export default TipCard;
