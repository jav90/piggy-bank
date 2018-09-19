import React, {Component} from 'react';
import {DailyComponent, WeeklyComponent} from "../components/diary";
import Calendar from "../components/diary/monthly";

class Diary extends React.Component {
  
    render(){
        return (

         
            
            <div className="Diary">
            <div><DailyComponent/></div>

              <main>
                <Calendar />
              </main>
            </div>
          );
        
    }
}

export default Diary;