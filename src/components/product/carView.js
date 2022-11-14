import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Button, Card, Stack, Typography } from '@mui/material';

export default function CarView(props) {
  const { image, CarName, Price } = props;
  console.log(image);
  return (
    <>
      <Box sx={{width:'100%'}}>
        
        <Carousel autoPlay interval="4000" transitionTime="500">
          {image?.map((images, index) => (
            <div>
              <img src={image[index]} />
              <p className="legend">My Classic Still 1</p>
            </div>
          ))}
        </Carousel>
        <Stack drection='column'>
          <Typography>Features:</Typography>
          <Typography>CarName:{CarName}</Typography>
          <Typography>Price:{Price}</Typography>
        </Stack>
      </Box>
    </>
  );
}
