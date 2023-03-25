import Head from 'next/head';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import ItemsCarousel from 'react-items-carousel';
import Companies from 'src/components/companies';
import PopularCars from 'src/components/popular-cars';

const Page = () => (
  <>
    <Head>
      <title>Dashboard | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1,
      }}
    >
      <Container maxWidth={false}>
        <Stack direction="row">
          <img src="https://s0.2mdn.net/simgad/8866261921149261565" width="100%" height="300px" />
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h4">Popular Makers</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <Typography variant="subtitle1">Choose wisely</Typography>
            </Stack>
            <Companies />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h4">Popular Cars</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <Typography variant="subtitle1">People liked the most are listed here</Typography>
            </Stack>
            <PopularCars />
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
