import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


export default React.createClass({
  displayName: 'DoughnutExample',

  render() {
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    );
  }
});

const Main = props => (
    <div>
        <div className="card text-center">
                <div className="card-header">
                    <h1>Welcome, Testname</h1>
                    <div className="home-pigu">

                    <img src={ require('./assets/images/green-pigu.png') } />
                    </div>
                
                </div>
            <div className="card-body">{props.name}</div>
        </div>
    </div>
  );
  
  export default Main;
  