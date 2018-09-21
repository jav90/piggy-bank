import React from 'react';
import PbCarousel from './PbCarousel';

const getCaptions = (currDate) => {
  const currentTime = currDate ? currDate : new Date();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const names = Object.freeze(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']);
  const date = new Date(year, month - 1, 1);
  const result = [];
  const day = currentTime.getDate();
  const caption = {};
  let currIndex = 0;
  let cont = 0;

  const amounts = []; 

  amounts[1] = 10;
  amounts[2] = 20;
  amounts[3] = 30;

  while (date.getMonth() == month - 1) {
    
    
    if (day === date.getDate()) {
      currIndex = cont;
    }
    const amount = amounts[day];
    const obj = {
      title: names[date.getDay()],
      subTitle: date.getDate(),   
      key: cont,
      amount   
    };
    cont++;
    result.push(obj);
    date.setDate(date.getDate() + 1);
  }
  caption.result = result;
  caption.activeIndex = currIndex;
  
  return caption;
}

class DailyComponent extends React.Component {

  render() {
    return <div className= "daydate">
      <PbCarousel items={getCaptions(this.props.day)}/>
    </div>;
  }
}

export { DailyComponent };