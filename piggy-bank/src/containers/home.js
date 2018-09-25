import React, { Component } from "react";
import Main from '../components/Home/Main.js';
import piguGreen from '../components/Home/assets/images/pigu-green.svg';
import HomeCarousel from "../components/Home/HomeCarousel.js";
import { Col, Grid, Row, ControlLabel, InputGroup, Checkbox, Button } from "react-bootstrap";
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
      <div className="Home">
        <div style={{marginTop:'20%'}}>
          <h2><strong>Welcome Jose!</strong></h2>
          <h1>Checkout is your current expenses rate!</h1>
        </div>
        <div style={{ width: '100%', position: 'absoulte'}}>
          <div style={{ backgroundImage: `url(${piguGreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '13%', marginTop:'35%' }}>
            <HomeCarousel chartData={this.state.chartData} />
          </div>
        </div>
      </div>
      </Grid>
    )
  }
}

export default Home;