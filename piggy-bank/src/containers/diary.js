import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";
import { Col, Grid, Row, Image} from "react-bootstrap";
import btnDaily from "./assets/images/btnDaily-05.svg"
import '../components/diary/assets/style.css';
import fondo from '../components/diary/assets/degradado.png';
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
            <div className="wrapwrap">
           <div className="Diary">
            <DailyComponent day={this.state.selectedDate}/>
              <main>
                <Calendar onDianaClick={this.onDateClick}/>
              </main>
            </div>
            </div>
          </Grid>
          );

    }
}

export default Diary;