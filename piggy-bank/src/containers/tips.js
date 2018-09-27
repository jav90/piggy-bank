import React, { Component } from "react";
import { Col, Grid, Row, Image, Jumbotron, Button, ButtonToolbar, Popover,  OverlayTrigger } from "react-bootstrap";
import pigutips from "./assets/images/pigu-tip.svg";
import "./assets/generalStyle.css";

import TipCard from "../components/Tips/tip";





class Tips extends React.Component {

    render() {

        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="You probably should konw!">
              <h2>“Having a healthy realtionshio with your bank will help you sleep at night! ;)”</h2>
            </Popover>
          );

        return (
            <Grid>
                <div className="wrapWrap">

                <Row>
                    <div className="piguYellow">
                    <Col xs={6} md={6}>
                        <Image srC={pigutips}/>
                    </Col>
                    </div>
                    <Col xs={6} md={6} style={{float:"right"}}>
                        <div className="piguTip">
                         Pigu Tips!
                        </div>
                        <p>Pigu is your personal finance adviser! This seccion is specially crafted for you to learn tips and tricks for your journey into having a healthy and beautiful relationship with, YES, MONEY!.</p>
                        <div>
                            <ButtonToolbar>
                                <OverlayTrigger 
                                    triger="click" 
                                    placement="bottom" 
                                    overlay={popoverHoverFocus}>
                                    <Button bsStyle="warning" bsSize="small">Psst! psst!</Button>
                                    </OverlayTrigger>
                            </ButtonToolbar>
                        </div>
                    </Col>
                    
                </Row>
                <Col xs={12} md={12}>
                
               <div className="tipCard">
                <TipCard/>
               </div>
                </Col>
            </div>
            </Grid>

        );

    }
}

export default Tips;