import PropTypes from 'prop-types';
import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Box, Button, Card, Container, Grid, Stack, styled, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Iconify from 'src/components/Iconify';
import Loading from 'src/components/loading';
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

Auction.getLayout = (ContactUs) => <DashboardLayout>{ContactUs}</DashboardLayout>;

export default function Auction() {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('pro', Products);
  async function getproductsformfirebase() {
    await axios.get('https://carshopserver.vercel.app/products').then((resp) => {
      setProducts(resp?.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getproductsformfirebase();
  }, []);
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
        <title>Auction</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <Typography variant="h4">Auction Cars</Typography>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Photos</TableCell>
                  <TableCell>Year/Model</TableCell>
                  <TableCell>Auction Location</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Current Bid</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {Products.filter((row) => row.auction == true).map((row) => (
                  <TableRow key={row.CarName}>
                    <TableCell component="th" scope="row">
                      <img src={row.Image} width={145} height={145} />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: 'blue', fontSize: '18px' }}>
                      {row.CarModel}/{row.CarName}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, fontSize: '18px' }}>{row.Location}</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: row.Status ? 'green' : 'red', fontSize: '18px' }}>
                      {row.Status ? 'Live Now' : 'Offline'}
                    </TableCell>
                    <TableCell sx={{ fontSize: '18px', fontWeight: 700 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {row.Price}
                        {row.Currency === 'dollar' ? (
                          <Iconify icon={'bi:currency-dollar'} />
                        ) : row.Currency === 'euro' ? (
                          <Iconify icon={'ic:sharp-euro'} />
                        ) : (
                          '_'
                        )}
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" sx={{ backgroundColor: 'green' }}>
                        Live Auction
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
}
