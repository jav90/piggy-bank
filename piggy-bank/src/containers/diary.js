import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";

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
            <div className="Diary">
            <h2 className="dailyhead">Daily Expenses</h2>
            <DailyComponent day={this.state.selectedDate}/>
              <main>
                <Calendar onDianaClick={this.onDateClick}/>
              </main>
            </div>
          );

    }
}

export default Diary;