import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './product/product-card';

export default function PopularCars() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((resp) => {
      setProducts(resp.data);
      console.log(Products);
    });
  }, []);
  return(
  <>
  <Grid container sx={{gap:3,p:3}}>
    {Products.map((product, index) => (
      <Grid item key={index} lg={2} xs={12}>
        <ProductCard product={product} />
      </Grid>
    ))}</Grid>
  </>
  )
}
