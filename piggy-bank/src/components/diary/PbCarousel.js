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
              
                <Carousel.Caption>
                  <h3 id= "daydate">{item.title} {item.subTitle}</h3>
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