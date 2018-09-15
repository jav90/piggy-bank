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
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/carousel.png" />
                <Carousel.Caption>
                  <h3>{item.title} {item.subTitle}</h3>
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