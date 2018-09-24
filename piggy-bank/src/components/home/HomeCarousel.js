import {Carousel, CarouselItem} from "react-bootstrap";
import Chart from "./Chart"
import React from 'react';

const HomeCarousel = (props) => {


  return (
    <div >
        <Carousel>
            <Carousel.Item>
                <Chart chartData={props.chartData} legendPosition="bottom"/>
            </Carousel.Item>
            <Carousel.Item>
                <Chart chartData={props.chartData} legendPosition="bottom"/>
            </Carousel.Item>
        </Carousel>
    
    </div>
  );
};

export default HomeCarousel;