import {Carousel} from "react-bootstrap";
import React from 'react';
import {Image} from 'react-bootstrap';
import deg from './assets/degradado.png';

const PbCarousel = (props) => {
  console.log("props.items.activeIndex ", props.items.activeIndex);
  return (
    <div className="col-md-5">
    
      <Carousel interval={null} indicators={false} activeIndex={props.items.activeIndex} defaultActiveIndex={props.items.activeIndex}>
        {
          props.items.result.map(item => {
            return (
              <Carousel.Item key={item.key}> 
              <img width={320} height={150} alt="Today!" src={deg} />
                <Carousel.Caption className="item">
                  <h3>{item.title} {item.subTitle} - {item.amount}</h3>
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