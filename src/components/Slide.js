import React from 'react';
import { Carousel } from 'antd';

export const Slider = ({message}) =>{
  const onChange = ( currentSlide ) => {
    console.log(currentSlide);
  };
  
  return (
    <Carousel afterChange={onChange}>
      
      <div>
        <h3 className=" contentStyle">{message}</h3>
      </div>
      <div>
        <h3 className="contentStyle">{message}</h3>
      </div>
     
    </Carousel>
  );
};

