import Head from 'next/head';
import { Box, Container, Grid, Stack } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import ItemsCarousel from "react-items-carousel";


const Page = () => (
  
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1
      }}
    >
      <Container maxWidth={false}>
        <Stack direction='row' >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikSZ8Wukw5DISb4G95kQcCWs5rFQhDgBOdg&usqp=CAU' width='100%' height='300px'/>
        </Stack>
        <Stack direction='row' sx={{p:3}}>
        <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={true}
        requestToChangeActive={value => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        {Array.from(new Array(3)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: "url(https://placeimg.com/380/200/nature)"
            }}
          />
        ))}
      </ItemsCarousel>

        </Stack>

        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default Page;