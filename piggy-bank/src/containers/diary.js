import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";
import { Col, Grid, Row, Image} from "react-bootstrap";
import btnDaily from "./assets/images/btnDaily-05.svg"

class Diary extends React.Component {
  state={
    selectedDate:null
  }

  
  onDateClick = day => {
    console.log(day)
    this.setState({
      selectedDate: day
    })
  };
    render(){
        return (
          <Grid>
            <div className="Diary">
            <h2 className="dailyhead">Daily Expenses</h2>
            <DailyComponent day={this.state.selectedDate}/>
              <main>
                <Calendar onDianaClick={this.onDateClick}/>
              </main>
            </div>
          </Grid>
          );

    }
}

export default Diary;