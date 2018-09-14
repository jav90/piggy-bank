import React, { Component } from 'react';
import Main from '../components/home/Main.js';
import Chart from '../components/home/Chart.js';
import '../index.css'
import './home.css'
import piguGreen from '../components/home/assets/images/pigu-green.svg'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {

      }
    }
  }
  componentWillMount() {
    this.getChartData()
  }

  getChartData() {
    this.setState({
      chartData: {
        //axios call
        labels: ['Fijos', 'Hormiga', 'treats', 'Social', 'Ahorro'],
        datasets: [{
          label: 'Gastos',
          data: [40, 19, 11, 22, 18],
          backgroundColor: ['#E10024', '#EEA845', '#5CD9EA', '#F69BF1', '#6DF5BE',
          ]
        }
        ]
      }
    })
  }

  render() {
    return (
      <div className="home">
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{backgroundImage:`url(${piguGreen})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize:'13%'}}>
            {/*<Main name={this.state.ninja}s/>*/}
            <Chart chartData={this.state.chartData} legendPosition="bottom"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;