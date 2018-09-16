import React, { Component } from 'react';
import Main from '../components/home/Main.js';
import Chart from '../components/home/Chart.js';
import '../index.css';
import './home.css';
import piguGreen from '../components/home/assets/images/pigu-green.svg';

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
      <div className="Home">
        <div style={{height:'25%', height:'auto'}}></div> 
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ backgroundImage: `url(${piguGreen})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '20%' }}>
            
            <Chart chartData={this.state.chartData} legendPosition="bottom" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;