import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Button, Card, Typography } from '@mui/material';

export default function CarView(props) {
  const { image,CarName,Price } = props;
  return (
    <>
      <div>
        <h2>My Image Gallery</h2>
        <Carousel autoPlay interval="4000" transitionTime="500">
          {image.map((images, index) => (
          
           
            <div>
              <img src={image[index]} />
              <p className="legend">My Classic Still 1</p>
            </div>
          ))}
          
        </Carousel>
       <Card>
        <Typography>Detials:</Typography>
        <Typography>CarName:{CarName}</Typography> 
         <Typography>Price:{Price}</Typography>
       </Card>
      </div>
    </>
  );
}
