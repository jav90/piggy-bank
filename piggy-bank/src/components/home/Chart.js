import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'center',
    }


    render() {
        return (
            <div className="chart">
                <Doughnut

                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Your Expenses',
                            fontSize: 15
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: 'right'
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;