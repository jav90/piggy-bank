import React from 'react';
import PbCarousel from './PbCarousel';

const getCaptions = () => {
  const currentTime = new Date();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const names = Object.freeze(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']);
  const date = new Date(year, month - 1, 1);
  const result = [];
  const day = currentTime.getDate();
  const caption = {};
  let currIndex = 0;
  let cont = 0;
  while (date.getMonth() == month - 1) {
    const obj = {
      title: names[date.getDay()],
      subTitle: date.getDate(),   
      key: cont   
    };
    if (day === date.getDate()) {
      currIndex = cont;
    }
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
    return <div>
      <PbCarousel items={getCaptions()}/>
    </div>;
  }
}

export { DailyComponent };