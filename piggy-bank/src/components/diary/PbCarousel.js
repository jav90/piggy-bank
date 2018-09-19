import {Carousel} from "react-bootstrap";
import React from 'react';

const PbCarousel = (props) => {
  return (
    <div className="col-md-5">
    
      <Carousel indicators={false} defaultActiveIndex={props.items.activeIndex}>
        {
          props.items.result.map(item => {
            return (
              <Carousel.Item key={item.key}>        
              <h1>
                Sure
              </h1>
                <Carousel.Caption>
                  <h3 className="daydate">{item.title} {item.subTitle}</h3>
                  Y así forever mil
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