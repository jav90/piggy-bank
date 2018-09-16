import React, { Component } from "react";
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
  componentDidMount() {
    this.getChartData()
  }

  getChartData() {
   let data = [
       {
         label: "CAFE",
         total: 100
       },
       {
        label: "COMIDA",
        total: 130
      },
      {
        label: "GASOLINA",
        total: 200
      },
      {
        label:"renta",
        total:800,
      }
      
     ];

     let labelsArr = [];
     let totalSpent = 0;
     let totalsArr = [];
     let percentageOfTotal=[];

     for(const catego in data){
        labelsArr.push(catego.label);
        totalsArr.push(catego.total);
        totalSpent += catego.total;
    }

  //catego.total/totalSpent*100
    percentageOfTotal= data.map((each)=>{
      return (each.totalsArr / totalSpent * 100)
    })




    this.setState({
      chartData: {
        labels: this.labelsArr,
        datasets: [{
          label: 'Gastos',
          data: this.percentageOfTotal,
          backgroundColor: ['#E10024', '#EEA845', '#5CD9EA', '#F69BF1', 
          ]
        }]
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