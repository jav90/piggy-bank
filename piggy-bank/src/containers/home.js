import React, { Component } from "react";
import Main from '../components/home/Main.js';
import piguGreen from '../components/home/assets/images/pigu-green.svg';
import HomeCarousel from "../components/home/HomeCarousel.js";
import { Col, Grid, Row, Button } from "react-bootstrap";
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
    return (
      <Grid>
        <Row className="home-container">
      <Col>
         <div >
          <h2><strong>Welcome Jose!</strong></h2>
          <h1>Checkout your current expenses rate!</h1>
         </div>
        </Col>
       </Row>
       <Row>
        <Col>
          <div style={{ backgroundImage: `url(${piguGreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '13%', marginTop:'35%' }}>
            <HomeCarousel chartData={this.state.chartData} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
          <Button bsStyle="warning">Pigu Tip!</Button>
        </div>
        </Col>
      </Row>
      </Grid>
    )
  }
}

export default Home;