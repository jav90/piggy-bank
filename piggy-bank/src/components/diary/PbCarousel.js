import {Carousel} from "react-bootstrap";
import React from 'react';
import {Panel} from "react-bootstrap";

const PbCarousel = (props) => {
  console.log("props.items.activeIndex ", props.items.activeIndex);
  return (
    <div className="col-md-5">
    
      <Carousel interval={null} indicators={false} activeIndex={props.items.activeIndex} defaultActiveIndex={props.items.activeIndex}>
        {
          props.items.result.map(item => {
            return (
              <Carousel.Item key={item.key}>   
       
                <Carousel.Caption className="dailyhead">
                  <h1>{item.title} {item.subTitle} - {item.amount}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }       
        </Carousel>
      </div>
  );
};

export default PbCarousel;