import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";

class Diary extends React.Component {
  

    render(){
        return <div><DailyComponent/></div>;
        return (
            <div className="Diary">
              <header>
                <div id="logo">
                  <span className="icon">date_range</span>
                  <span>
                    react<b>calendar</b>
                  </span>
                </div>
              </header>
              <main>
                <Calendar />
              </main>
            </div>
          );
        
    }
}

export default Diary;