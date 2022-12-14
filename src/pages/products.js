import Head from 'next/head';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import  ProductCard  from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default function Page () {
  const[Products,setProducts]=useState([]);
  


  useEffect(() => {
    axios.get('https://carshopserver.vercel.app/products').then(resp => {

     setProducts(resp.data);
    
  });
  },[]); 
  console.log(Products)
  return(
  <>
    <Head>
      <title>
        Products | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {Products.map((product,index) => (
              <Grid
                item
                key={index}
                lg={3}
                md={6}
                xs={12}
              >
                <ProductCard product={product}/>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);
}



