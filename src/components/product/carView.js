import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Button, Card, Link, Stack, Typography } from '@mui/material';
import Iconify from '../Iconify';

export default function CarView(props) {
  const { image, CarName, Price, Details } = props;
  // console.log(Details);
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Carousel autoPlay interval="4000" transitionTime="500">
          {image?.map((images, index) => (
            <div key={index}>
              <img src={image[index]} />
              {/* <p className="legend">My Classic Still 1</p> */}
            </div>
          ))}
        </Carousel>
        <Stack direction='row' spacing={1}>
          <Typography variant="h5"  >Vehicle</Typography>
          <Typography variant="h5" color={'red'}>Overview </Typography>
          </Stack>
        <Stack drection="column" spacing={2} sx={{ pl:2,pt:3,width:'70%' }}>
          
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify
                icon={'material-symbols:circle'}
                sx={{color:Details?.ExteriorColor=='undefined'?'black':Details?.ExteriorColor}}
                width={30}
                height={30}
              />
              <Box>
                <Typography>Exterior:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.ExteriorColor || 'undefined'}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify icon={'mdi:engine-outline'} width={30} height={30} />
              <Box>
                <Typography>Engine:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.Drivetrain || 'undefined'}</Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            {' '}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify
                icon={'material-symbols:circle'}
              
                sx={{color:Details?.InteriorColor=='undefined'?'gray':Details?.InteriorColor}}
                width={30}
                height={30}
              />
              <Box>
                <Typography>Interior:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.InteriorColor || 'undefined'}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify icon={'fluent-emoji-high-contrast:fuel-pump'} width={30} height={30} />
              <Box>
                <Typography>Fuel Type:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.FuelType || 'undefined'}</Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify icon={'fluent:transmission-20-filled'} width={30} height={30} />
              <Box>
                <Typography>Transmission:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.Transmission || 'undefined'}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Iconify icon={'material-symbols:airline-seat-recline-extra'} width={30} height={30} />
              <Box>
                <Typography>Seats:</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details?.Seats || 'undefined'}</Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction="column" >
            {' '}
            <Typography variant="h6" sx={{mt:3,fontWeight:400}}>Vehicle History:</Typography>
            <Stack direction='row' sx={{mt:1}}>
            <Box>
            <Typography sx={{fontWeight:600}}>- No Accident or Damage Reported</Typography>
            <Typography sx={{fontWeight:600}}>- Multiple Owners</Typography>
            <Link>View the Free CARFAX Report</Link>
            </Box>
          </Stack>
          </Stack>
          
        </Stack>
      </Box>
    </>
  );
}
