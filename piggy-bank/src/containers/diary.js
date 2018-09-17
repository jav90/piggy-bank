import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";

class Diary extends React.Component {
  
    render(){
        return (

         
            
            <div className="Diary">
            <div><DailyComponent/></div>
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