import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Pagination, Stack } from '@mui/material';
import { products } from '../__mocks__/products';

import ProductCard from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { ProductSort } from 'src/sections/@dashboard/products';
import ProductListToolbar from 'src/components/product/product-list-toolbar';
import Loading from 'src/components/loading';
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default function Page() {
  const [Products, setProducts] = useState([]);
  const [sort, setSort] = useState('Newest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://carshopserver.vercel.app/products').then((resp) => {
      setProducts(resp.data);
      setLoading(false)
    });
  }, []);

  async function getcars() {
    await axios.get('https://carshopserver.vercel.app/products').then((resp) => {
      setProducts(resp.data);
      setLoading(false)
      //  console.log(Products[5].Image.data)
    });
  }
  async function getcarsHighLow() {
    await axios.get('https://carshopserver.vercel.app/HighLowproducts').then((resp) => {
      setProducts(resp.data);
      //  console.log(Products[5].Image.data)
    });
  }

  async function getcarsLowHigh() {
    await axios.get('https://carshopserver.vercel.app/LowHighproducts').then((resp) => {
      setProducts(resp.data);
      //  console.log(Products[5].Image.data)
    });
  }
  async function getcarsSearch(event) {
    
    event.length > 0
      ? await axios.get('https://carshopserver.vercel.app/Searchproducts', { params: { event } }).then((resp) => {
          setProducts(resp.data);
          console.log(resp.data);
        })
      : getcars();
  }
  const handleHighLow = () => {
    getcarsHighLow();
    setSort('High-Low');
  };

  const handleLowHigh = () => {
    getcarsLowHigh();
    setSort('Low-High');
  };
  const handleNewest = () => {
    getcars();
    setSort('Newest');
  };
  const handleSearch = (event) => {
    getcarsSearch(event.target.value);
    // console.log(event.target.value)
  };


  if (loading) {
    return (
      // <Container maxWidth={false}>
          <Box sx={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Loading />
          </Box>
        // </Container>
      
    );
  }
  return (
    <>
      <Head>
        <title>Products | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar handleSearch={handleSearch} />
          <Stack directio="row" justifyContent="flex-end" sx={{ width: '100%' }}>
            <ProductSort
              handleHighLow={handleHighLow}
              handleLowHigh={handleLowHigh}
              sort={sort}
              handleNewest={handleNewest}
            />
          </Stack>

          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
            {Products.filter(row => row.auction ==false).map((product, index) => (
                <Grid item key={index} lg={3} md={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
}
