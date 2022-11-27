import { Box, Button, Card, Grid, Typography } from '@mui/material';
import Iconify from './Iconify';


export default function Footer() {
  return (
    <>
      {/* <Box sx={{p:3, backgroundImage: 'linear-gradient(#7986cb,#3f51b5)',height:120,mt:3}}>
    
    </Box> */}
      <Grid container sx={{ height: 220, mt: 3 }}>
        <Grid
          item
          xs={12}
          display="flex"
          sx={{ backgroundColor: '#c5cae9', gap: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Iconify icon="akar-icons:facebook-fill" sx={{ width: '30px', height: '30px', color: '#9e9e9e' }} />
          <Iconify icon="ant-design:instagram-filled" sx={{ width: '35px', height: '35px', color: '#9e9e9e' }} />{' '}
          <Iconify icon="ant-design:twitter-circle-filled" sx={{ width: '35px', height: '35px', color: '#9e9e9e' }} />
          <Iconify icon="dashicons:whatsapp" sx={{ width: '35px', height: '35px', color: '#9e9e9e' }} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          
          <Button sx={{color: '#9e9e9e',fontSize:'20px' }}>Home</Button>
          <Button sx={{color: '#9e9e9e',fontSize:'20px' }}> Services</Button>
          <Button sx={{color: '#9e9e9e',fontSize:'20px' }}>About Us</Button>
          <Button sx={{color: '#9e9e9e',fontSize:'20px' }}>Privacy Policy</Button>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography sx={{color:'#bdbdbd'}}>CopyRight@2022 Mahdi Code</Typography>
        </Grid>
      </Grid>
    </>
  );
}
