//react, 
import React, { Component } from "react";
import { Link } from "react-router-dom";
//components and images
import lightbulb from './assets/images/lightbulb.svg';
import piguGreen from '../components/home/assets/images/pigu-green.svg';
import HomeCarousel from "../components/home/HomeCarousel.js";

import { Col, Grid, Row, Image, Jumbotron, Button, ButtonToolbar, Popover,  OverlayTrigger } from "react-bootstrap";
import "./assets/generalStyle.css";
// import API from "../../api/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }
  componentWillMount() {
    this.getChartData()
  }

  getChartData() {
    
    // let data = API.getGastos()
    // .then(gasto => {
    //   console.log(gasto);
    // })
    // .catch(err => console.log(err))
    //   console.log(this.state);
    
    let data = [
      { label: "CAFE", total: 100 },
      { label: "COMIDA", total: 130 },
      { label: "GASOLINA", total: 200 },
      { label: "RENTA", total: 800 }

    ];

    
    let labelsArr = [];
    let totalSpent = 0;
    let totalsArr = [];

    
    for (const catego of data) {
      console.log(catego.label)
      labelsArr.push(catego.label);
      totalsArr.push(catego.total);
    
    }
    console.log(totalsArr);
    console.log(totalSpent);


    this.setState({
      chartData: {
        labels: labelsArr,
        datasets: [{
          label: 'Gastos',
          data:totalsArr ,
          backgroundColor: ['#E10024', '#EEA845', '#5CD9EA', '#F69BF1',],
          borderColor: '#EAFCFF'
        }]
      }
    })
  }

  render() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="Hello, Jose!">
      <h2>Check out the summary of your expenses, now is a good moment to review where you are spending the most!</h2>
      </Popover>
    );

    return (
      <Grid>
        <div className="wrapWrap">
        <Row className="home-container">
      <Col xs={12} md={12}>
          <div className="home-title" >Welcome Jose!</div>
        </Col>
       </Row>
       <Row><Col xs={12} md={12}>
       <div className="chart-title"><strong>Your expenses by category</strong><br/>Click on each color to see more.</div>
       </Col></Row>
       <div className="btnpsst">
            <Col xs={12} md={12}>
            
               <ButtonToolbar>
                <OverlayTrigger 
                     triger="click" 
                    placement="bottom" 
                    overlay={popoverHoverFocus}>
                      <Button bsClass="psst">Psst! psst!</Button>
                </OverlayTrigger>
              </ButtonToolbar>
            </Col>
          </div>
       <Row>
        <Col xs={12} md={12}>
          <div className="pigu-home" style={{ backgroundImage: `url(${piguGreen})` }}>
            <HomeCarousel chartData={this.state.chartData}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <div>
          <Link to="/tips">
              <div className="bulb"><img src={lightbulb} /> </div>
              <div><h3>Pigu Tip!</h3> </div>
            </Link>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2>Learn with pigu how to have a healthy relationship with finance.</h2>
        </Col>
      </Row>
        </div>
      </Grid>
    )
  }
}

export default Home;