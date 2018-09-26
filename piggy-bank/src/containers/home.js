//react, 
import React, { Component } from "react";
import { Link } from "react-router-dom";
//components and images
import lightbulb from './assets/images/lightbulb.svg';
import piguGreen from '../components/home/assets/images/pigu-green.svg';
import HomeCarousel from "../components/home/HomeCarousel.js";
import API from '../api/API'
import { Col, Grid, Row, Button} from "react-bootstrap";
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
    
    let data = API.getGastos()
    .then(gasto => {
      console.log(gasto);
    })
    .catch(err => console.log(err))
      console.log(this.state);
    
    let data2 = [
      { categoria: "CAFE", total: 100 },
      { categoria: "COMIDA", total: 130 },
      { categoria: "GASOLINA", total: 200 },
      { categoria: "RENTA", total: 800 }

    ];

    
    let labelsArr = [];
    let totalSpent = 0;
    let totalsArr = [];

    
    for (const catego of data) {
      console.log(catego.categoria)
      labelsArr.push(catego.categoria);
      totalsArr.push(catego.total);
    
    }
    console.log(totalsArr);
    console.log(totalSpent);


    this.setState({
      chartData: {
        categorias: labelsArr,
        datasets: [{
          categoria: 'Gastos',
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
          <h1><strong>Welcome Jose!</strong></h1>
          <h2>Check out the summary of your expenses, now is a good moment to review where you are spending the most!</h2>
         </div>
        </Col>
       </Row>
       <Row>
        <Col>
          <div style={{ backgroundImage: `url(${piguGreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '13%', marginTop:'35%' }}>
            <HomeCarousel chartData={this.state.chartData}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
          <Link to="/tips">
            <div className='col-xs-6 text-right'>
              <img src={lightbulb} />
            </div>
          </Link>
          <div className='col-xs-6 text-left'>
              <h1><strong>Pigu Tip! </strong></h1>
              <h2>Learn with pigu how to have a healthy relationship with finance.</h2>
            </div>
        </div>
        </Col>
      </Row>
      </Grid>
    )
  }
}

export default Home;